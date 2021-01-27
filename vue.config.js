module.exports = {
	chainWebpack: (config) => {
		config.plugin("html").tap((args) => {
			args[0].title = "Emiya Consulting";
			return args;
		});
	},
};
