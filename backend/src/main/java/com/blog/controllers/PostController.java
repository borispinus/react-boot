package com.blog.controllers;

import com.blog.models.Post;
import com.blog.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


import java.net.URISyntaxException;


/**
 * Created by boro on 08.07.17.
 */

@Controller
public class PostController {
    @Autowired
    PostRepository postRepository;

    @RequestMapping(value = {"/", "/admin", "/login", "/post/{id:\\d+}"}, method = RequestMethod.GET)
    public String home() throws URISyntaxException{
        return "index";
    }

    @RequestMapping(value = "/is_admin", method = RequestMethod.GET)
    @ResponseBody
    public Boolean isAdmin() throws URISyntaxException{
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        if (auth instanceof AnonymousAuthenticationToken) {
            return false;
        }
        return true;
    }

    @RequestMapping(value = "/api/posts", method = RequestMethod.GET)
    @ResponseBody
    public Iterable<Post> getAllPosts() throws URISyntaxException{
        return postRepository.findAll();
    }

    @RequestMapping(value = "/api/post/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Post getPost(@PathVariable(value="id") Long id){
        return postRepository.findOne(id);

    }



    @RequestMapping(value = "/api/post", method = RequestMethod.POST)
    @ResponseBody
    public Post createPost(@RequestBody Post post){
        return postRepository.save(post);

    }

    @RequestMapping(value = "/api/post/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public String deletePost( @PathVariable(value="id") Long id){
        postRepository.delete(id);
        return "redirect:/api/posts";

    }
}
