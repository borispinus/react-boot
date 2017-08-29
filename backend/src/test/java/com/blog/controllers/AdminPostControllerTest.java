package com.blog.controllers;

import com.blog.models.Post;
import com.blog.repositories.PostRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.Date;

import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;
import static org.junit.Assert.assertThat;

/**
 * Created by boro on 28.08.17.
 */

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
@Sql(scripts = "truncate.sql", executionPhase = Sql.ExecutionPhase.AFTER_TEST_METHOD)
public class AdminPostControllerTest {

    @Value("${BLOG_ADMIN_NAME}")
    private String username;
    @Value("${BLOG_ADMIN_PASSWORD}")
    private String password;

    @Autowired
    private PostRepository postRepository;
    private TestRestTemplate restTemplate;

    @Before
    public void setUp() throws Exception {
        restTemplate = new TestRestTemplate(username , password);
        postRepository.save(new Post("title1","text1", new Date()));
        postRepository.save(new Post("title2","text2", new Date()));
    }

    @Test
    public void createPost() throws Exception {
        HttpEntity<Post> entity = new HttpEntity<>(new Post("title3", "text3", new Date()));
        ResponseEntity<Post> responseEntity = restTemplate.postForEntity("http://localhost:8080/api/post", entity, Post.class);
        Post post = responseEntity.getBody();
        HttpStatus status = responseEntity.getStatusCode();
        assertThat(post, notNullValue());
        assertThat(status, is(HttpStatus.OK));
        assertThat(post.getTitle(), is("title3"));
        assertThat(post.getText(), is("text3"));
    }

    @Test
    public void deletePost() throws Exception {
        ResponseEntity<Void> responseEntity = restTemplate.exchange("http://localhost:8080/api/post/2",
               HttpMethod.DELETE, null, Void.class);
    }
}
