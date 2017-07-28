package com.blog.controllers;

import com.blog.models.Post;
import com.blog.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
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

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String home() throws URISyntaxException{
        return "home";
    }


    @RequestMapping(value = "/posts", method = RequestMethod.GET)
    @ResponseBody
    public Iterable<Post> getAllPosts() throws URISyntaxException{
        return postRepository.findAll();
    }

    @RequestMapping(value = "/post/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Post getPost(@PathVariable(value="id") Long id){
        return postRepository.findOne(id);

    }

    @RequestMapping(value = "/post/{id}", method = RequestMethod.DELETE)
    public String deletePost( @PathVariable(value="id") Long id){
        postRepository.delete(id);
        return "redirect:/posts";

    }


}
