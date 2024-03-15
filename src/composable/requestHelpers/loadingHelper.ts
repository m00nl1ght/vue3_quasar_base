import { useAppProgressBanner } from '@/stores/app/appProgressBanner'
import { storeToRefs } from 'pinia'

const appProgressBanner = useAppProgressBanner()
const { checkLoading } = storeToRefs(appProgressBanner)

export { checkLoading }
