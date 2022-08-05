package ru.kata.spring.boot_security.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.model.Role;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.UserService;


import java.sql.SQLException;
import java.util.List;

@Controller
@RequestMapping("/admin")
public class AdminController {

    private final UserService userService;

    @Autowired
    public AdminController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public String findAll(Model model) {
        model.addAttribute("users", userService.findAll());
        return "allusers";
    }

    @GetMapping("/new")
    public String newUser(Model model) {
        model.addAttribute("user", new User());
        return "new";
    }

    @PostMapping("/new")
    public String create(@ModelAttribute("user") User user) {
        userService.save(user);
        return "redirect:/admin/";
    }

    @GetMapping("/{id}/edit")
    public String edit(Model model, @PathVariable("id") Long id) throws SQLException {
        model.addAttribute("user", userService.findById(id));
        model.addAttribute("listRoles", userService.listRoles());
        return "/edit";
    }

    @PatchMapping("/{id}")
    public String update(@ModelAttribute("user") User user, @PathVariable("id") Long id) throws SQLException {
        userService.update(id, user);
        return "redirect:/admin/";
    }

    @GetMapping("/delete/{id}")
    public String remove(@ModelAttribute("id") Long id) {
        userService.delete(id);
        return "redirect:/admin/";
    }

//    @DeleteMapping("/{id}")
//    public String delete(@ModelAttribute("id") Long id) {
//        userService.delete(id);
//        return "redirect:/admin/";
//    }

    ///////////////////////////////////////////////////////////
    @GetMapping("/getOne")
    @ResponseBody
    public User getOne(Long id) {
        return userService.findById(id);
    }

//    @RequestMapping(value = "/update/",method = {RequestMethod.PUT, RequestMethod.GET})
    @PutMapping("/update")
    public String updateUser(User user) {
        userService.saveUser(user);
        return "redirect:/admin/";
    }

//    @DeleteMapping("/delete")
    @RequestMapping(value = "/delete",method = {RequestMethod.DELETE,RequestMethod.GET})
    public String delete( Long id) {
        userService.delete(id);
        return "redirect:/admin/";
    }




}




