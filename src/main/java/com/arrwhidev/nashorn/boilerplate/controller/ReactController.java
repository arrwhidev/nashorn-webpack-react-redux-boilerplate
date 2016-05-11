package com.arrwhidev.nashorn.boilerplate.controller;

import com.arrwhidev.nashorn.boilerplate.model.Person;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
public class ReactController {

    private static final Person[] PERSON_LIST = {
        new Person("Abraham", "Lincoln", 207),
        new Person("Thomas", "Jefferson", 273),
        new Person("George", "Washington", 284)
    };

    @RequestMapping(value = "/app/**")
    public String index(Model model, HttpServletRequest request) {
        model.addAttribute("requestPath", request.getRequestURI());
        model.addAttribute("personList", PERSON_LIST);
        return "react";
    }

    @RequestMapping(value = "/")
    public void redirect(HttpServletResponse response) throws IOException {
        response.sendRedirect("/app");
    }
}
