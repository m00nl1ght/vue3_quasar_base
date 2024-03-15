import { defineStore } from 'pinia'

export interface LoadingObjectType {
  loaderObj: string[]
  data: boolean
}

interface State {
  showBanner: boolean
  loadingObj: { [index: string | number]: boolean }
  loadingObjCount: { [index: string | number]: number }
}

export const useAppProgressBanner = defineStore('appProgressBanner', {
  state: (): State => {
    return {
      showBanner: false,
      loadingObj: {},
      loadingObjCount: {}
    }
  },

  getters: {
    checkLoading: (state) => {
      return (loaderName: string | string[]) => {
        if (Array.isArray(loaderName)) {
          return (
            Object.keys(state.loadingObj).filter((key) => {
              return loaderName.includes(key) && state.loadingObj[key] === true
            }).length > 0
          )
        }
        return state.loadingObj[loaderName] || false
      }
    }
  },

  actions: {
    setLoadingObject(params: LoadingObjectType) {
      const { loaderObj, data }: LoadingObjectType = params

      if (loaderObj && loaderObj.length) {
        loaderObj.forEach((key) => {
          if (this.loadingObjCount[key] === undefined) this.loadingObjCount[key] = 0

          data
            ? (this.loadingObjCount[key] = this.loadingObjCount[key] + 1)
            : (this.loadingObjCount[key] = this.loadingObjCount[key] - 1)

          if (this.loadingObjCount[key] < 0) this.loadingObjCount[key] = 0

          if ((!data && this.loadingObjCount[key] === 0) || data) this.loadingObj[key] = data
        })
      }
    },

    setLoading(payload: boolean) {
      this.showBanner = payload
    }
  }
})
