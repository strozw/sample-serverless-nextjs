import { GetStaticPaths, GetStaticProps } from "next";


export const getStaticProps: GetStaticProps<{}> = async context => {
	console.log('blocking', context.params)

	return {
		props: {
			id: context.params.id
		}
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	console.log('blocking')
	return {
		paths: [],
		fallback: 'blocking'
	}
}

export default function PokemonPage(props: { id: string }) {
	return (
		<div>
			<h1>SSG Blocking</h1>
			ID {props.id}
		</div>
	)
}
