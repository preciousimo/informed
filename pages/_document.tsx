import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-gray-100 dark:bg-zinc-900 transition-all duration-700'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
