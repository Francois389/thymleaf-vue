package org.fsp.thymleafvue

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.servlet.ModelAndView

@Controller
class HelloVueController {

    @GetMapping("/")
    fun showHelloVuePage(): ModelAndView {
        val model = emptyMap<String, Any>().toMutableMap()
        model["title"] = "Hello Vue !"
        return ModelAndView("hello-vue.html", model)
    }
}