import { categories } from "../../constants"
import fetchNews from "../../utils/fetchNews"

async function HomePage() {
  const news: NewsResponse = await fetchNews(categories.join(','))
  return (
    <div>HomePage</div>
  )
}

export default HomePage