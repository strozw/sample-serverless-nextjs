import Head from 'next/head'

export default function Home() {
	let s = ''
  return (
    <div className="container">
      <Head>
        <title>Sample Nextjs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

			<header>
				header
			</header>

			<main>
				main
			</main>

			<footer>
				footer
			</footer>
    </div>
  )
}
