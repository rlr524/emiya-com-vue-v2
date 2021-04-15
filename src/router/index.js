import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact2 from "../components/Contact2.vue";

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
		component: Contact2,
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
