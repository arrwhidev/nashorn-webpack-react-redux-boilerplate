package com.arrwhidev.nashorn.boilerplate.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.view.script.ScriptTemplateConfigurer;
import org.springframework.web.servlet.view.script.ScriptTemplateViewResolver;

@Configuration
public class ViewConfig {

    private static final String[] scripts = {
        "static/js/polyfill.js",
        "static/js/ejs.min.js",
        "static/js/render.js",
        "server.min.js"
    };

    @Bean
    public ViewResolver reactViewResolver() {
        ScriptTemplateViewResolver viewResolver = new ScriptTemplateViewResolver();
        viewResolver.setPrefix("templates/");
        viewResolver.setSuffix(".ejs");
        return viewResolver;
    }

    @Bean
    public ScriptTemplateConfigurer reactConfigurer() {
        ScriptTemplateConfigurer configurer = new ScriptTemplateConfigurer();
        configurer.setEngineName("nashorn");
        configurer.setScripts(scripts);
        configurer.setRenderFunction("render");
        configurer.setSharedEngine(false);
        return configurer;
    }
}