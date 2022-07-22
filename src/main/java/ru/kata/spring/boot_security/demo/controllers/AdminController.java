package ru.kata.spring.boot_security.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.UserService;

import javax.validation.Valid;
import java.sql.SQLException;

@Controller
@RequestMapping("/admin")
public class AdminController {

    private final UserService userService;

    @Autowired
    public AdminController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("")
    public String index(Model model) {
        model.addAttribute("users", userService.findAll());
        return "allusers";
    }

    @GetMapping("/{id}")
    public String show(@PathVariable("id") Long id, Model model) throws SQLException {
        model.addAttribute("user", userService.show(id));
        return "show";
    }

    @GetMapping("/new")
    public String newUser(Model model) {
        model.addAttribute("user", new User());
        return "new";
    }

//    @PostMapping("/new")
//    public String create(@ModelAttribute("user") @Valid User user, BindingResult bindingResult) {
//        if (bindingResult.hasErrors()) {
//            return "/new";
//        }
//        userService.save(user);
//        return "redirect:/admin/";
//    }
@PostMapping("/new")
public String create(@ModelAttribute("user") User user) {
    userService.save(user);
    return "redirect:/admin/";
}


    @GetMapping("/{id}/edit")
    public String edit(Model model, @PathVariable("id") Long id) throws SQLException {
        model.addAttribute("user", userService.show(id));
        return "/edit";
    }

//    @PatchMapping("/{id}")
//    public String update(@ModelAttribute("user") @Valid User user, BindingResult bindingResult, @PathVariable("id") Long id) throws SQLException {
//        if (bindingResult.hasErrors()) {
//            return "/edit";
//        }
//        userService.update(id, user);
//        return "redirect:/admin/";
//    }

    @PatchMapping("/{id}")
    public String update(@ModelAttribute("user") User user, @PathVariable("id") Long id) throws SQLException {
//        if (bindingResult.hasErrors()) {
//            return "/edit";
//        }
        userService.update(id, user);
        return "redirect:/admin/";
    }


    @GetMapping("/delete/{id}")
    public String remove(@ModelAttribute("id") Long id) {
        userService.delete(id);
        return "redirect:/admin/";
    }

    @DeleteMapping("/{id}")
    public String delete(@ModelAttribute("id") Long id) {
        userService.delete(id);
        return "redirect:/admin/";
    }
}




