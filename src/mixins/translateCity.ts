import cities from '@/assets/json/city.json'

export const chineseToEng = (city: string): string => cities.data.filter(item => item.chinese === city)[0].eng
