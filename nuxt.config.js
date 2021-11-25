export default {
	target: 'static',
	
	loading: {
		color: 'blue',
	},

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'nuxt-app',
		htmlAttrs: {
		lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	
	css: [],	 
	
	plugins: [
		{ src: '~/plugins/vue-backtotop.js', ssr: false },
	],
	
	components: true,
	
	buildModules: [ 
		'@nuxtjs/tailwindcss',
	],
	
	modules: [ 
		'@nuxtjs/axios',
	], 
	axios: {
		baseURL: 'http://localhost:3000',
	},
	publicRuntimeConfig: {
  	baseURL: process.env.BASE_URL || 'http://localhost:3000/',
	},

	build: {
		postcss: {
			plugins: {
				tailwindcss: {},
				autoprefixer: {},
			}
		}  
	}
} 