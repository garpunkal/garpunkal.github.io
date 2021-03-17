require("~/main.css");
import DefaultLayout from "~/layouts/Default.vue";
import Vue from "vue";

export default function(Vue, { router, head, isClient }) {
	
	head.meta.push({
		name: "keywords",
		content:
			"garpunkal, gareth, wright, gareth wright, garpunkal.dev, development manager, c# web developer, umbraco, umbraco certified developer, c# developer, developer, umbraco certified expert, andover, hampshire, csharp, vue, tailwind, front end"
	});

	head.meta.push({
		name: "description",
		content:
			"Gareth Wright - Development Manager - C# .net MVC Developer - Umbraco Certified Expert - Vue, Tailwind and Front End Developer"
	});

	head.meta.push({
		name: "author",
		content: "Gareth Wright"
	});

	head.meta.push({
		name: "theme-color",
		content: "#077DA0"
	});

	head.meta.push({
		name: "copyright",
		content: "Gareth Wright"
	});

	head.link.push({
		rel: 'canonical',
		href: 'https://garpunkal.dev'
	})

	head.meta.push(
			// OpenGraph data (Most widely used)
		{property: 'og:title', content: 'Gareth Wright - Senior C# .net MVC Developer'},
		{property: 'og:site_name', content: 'garpunkal.dev'},
		// The list of types is available here: http://ogp.me/#types
		{property: 'og:type', content: 'website'},
		// Should the the same as your canonical link, see below.
		{property: 'og:url', content: 'https://garpunkal.dev'},
		{property: 'og:image', content: 'https://en.gravatar.com/userimage/11972664/9044a645bbb9f1b063a66ddefb7cfc5a.jpeg?size=400'},
		// Often the same as your meta description, but not always.
		{property: 'og:description', content: 'Senior C# .net MVC Developer & Umbraco Certified Expert'},
	
		// Twitter card
		{name: 'twitter:card', content: 'summary'},
		{name: 'twitter:site', content: 'https://garpunkal.dev'},
		{name: 'twitter:title', content: 'Gareth Wright - Senior C# .net MVC Developer'},
		{name: 'twitter:description', content: 'Senior C# .net MVC Developer & Umbraco Certified Expert'},
		// Your twitter handle, if you have one.
		{name: 'twitter:creator', content: '@garpunkal'},
		{name: 'twitter:image:src', content: 'https://en.gravatar.com/userimage/11972664/9044a645bbb9f1b063a66ddefb7cfc5a.jpeg?size=400'},
	);

	head.bodyAttrs = {
		class: "bg-brand dark:bg-black"
	};

	Vue.component("Layout", DefaultLayout);
}
