import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: Home,
	},
	{
		path: "/contact",
		name: "contact",
		component: Contact,
	},
	{
		path: "*",
		redirect: "/",
	},
];

const router = new VueRouter({
	mode: "history",
	base: "/",
	routes,
});

export default router;
