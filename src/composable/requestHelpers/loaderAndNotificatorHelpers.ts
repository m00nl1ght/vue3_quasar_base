import { useAppProgressBanner } from '@/stores/app/appProgressBanner'
import { useAppNotificationStore } from '@/stores/app/appNotification'
/*
example usage:

1) chain decorators. 'this' context inside decorators is undefined usually.
withLoadingIndicator(
  withNotifier(
    dispatch("async action", { ...payload }))
);

2) chain async anon fns. 'this' context inside decorators is undefined usually.
withLoadingIndicator(async () => {
  await withNotifier(async () => {
    await dispatch("async action", { ...payload });
  });
});

*/

function createWithLoadingIndicator() {
  return async function (
    this: any,
    func: Promise<any> | Function,
    loaderObj: string[] | undefined = undefined
  ) {
    const appProgressBanner = useAppProgressBanner()
    const isPromise = func && func instanceof Promise

    if (!isPromise && typeof func !== 'function')
      throw new Error("parameter 'func' must be a function or promise")

    if (loaderObj) {
      appProgressBanner.setLoadingObject({ loaderObj, data: true })
    } else {
      appProgressBanner.setLoading(true)
    }

    try {
      if (isPromise) {
        await func
      } else {
        await func.apply(this, [...arguments].shift())
      }
    } catch {
      // eat
    }

    if (loaderObj) {
      appProgressBanner.setLoadingObject({ loaderObj, data: false })
    } else {
      appProgressBanner.setLoading(false)
    }
  }
}

function createWithNotifier() {
  return async function (this: any, func: Promise<any> | Function, text?: string) {
    const appNotificationStore = useAppNotificationStore()
    const isPromise = func && func instanceof Promise

    if (!isPromise && typeof func !== 'function')
      throw new Error("parameter 'func' must be a function or promise")

    try {
      if (isPromise) {
        await func
      } else {
        await func.apply(this, [...arguments].slice(2))
      }

      if (text) {
        appNotificationStore.notifySuccess(text)
      }
    } catch (err) {
      appNotificationStore.notifyError(err)
    }
  }
}

export const withLoadingIndicator = createWithLoadingIndicator()
export const withNotifier = createWithNotifier()
