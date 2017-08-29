package com.blog.controllers;

import com.blog.models.Post;
import com.blog.repositories.PostRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;


import java.util.Date;
import java.util.List;


import static java.util.stream.Collectors.toList;
import static org.hamcrest.Matchers.*;
import static  org.junit.Assert.assertThat;


/**
 * Created by boro on 26.08.17.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
@Sql(scripts = "truncate.sql", executionPhase = Sql.ExecutionPhase.AFTER_TEST_METHOD)
public class PostControllerTest {
    @Autowired
    private PostRepository postRepository;
    private TestRestTemplate restTemplate = new TestRestTemplate();


    @Before
    public void setUp() throws Exception {
        postRepository.save(new Post("title1","text1", new Date()));
        postRepository.save(new Post("title2","text2", new Date()));

    }

    @Test
    public void getAllPosts() throws Exception {
        ResponseEntity<List<Post>> responseEntity = restTemplate.exchange("http://localhost:8080/api/posts",
                HttpMethod.GET, null, new ParameterizedTypeReference<List<Post>>() {});
        List<Post> actualList = responseEntity.getBody();
        List<String> titleList = actualList.stream().map(post -> post.getTitle()).collect(toList());
        List<String> textList = actualList.stream().map(post -> post.getText()).collect(toList());
        assertThat(titleList.size(), is(2));
        assertThat(titleList, containsInAnyOrder("title1", "title2"));
        assertThat(textList, containsInAnyOrder("text1", "text2"));
    }

    @Test
    public void getPost() throws Exception {
        ResponseEntity<Post> responseEntity = restTemplate.exchange("http://localhost:8080/api/post/1",
                HttpMethod.GET, null, Post.class);
        Post post = responseEntity.getBody();
        assertThat(post.getId(), is(1L));
        assertThat(post.getText(), is("text1"));
        assertThat(post.getTitle(), is("title1"));
    }

    @Test
    public void createPost() throws Exception {
        HttpEntity<Post> entity = new HttpEntity<>(new Post("title4", "text4", new Date()));
        ResponseEntity<Post> responseEntity = restTemplate.postForEntity("http://localhost:8080/api/post", entity, Post.class);
        Post post = responseEntity.getBody();
        HttpStatus status = responseEntity.getStatusCode();
        assertThat(post, nullValue());
        assertThat(status, is(HttpStatus.UNAUTHORIZED));
    }

}