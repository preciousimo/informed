import { categories } from "../../constants"

async function HomePage() {
  const news: NewsResponse = await fetchNews(categories.join(','))
  return (
    <div>HomePage</div>
  )
}

export default HomePage