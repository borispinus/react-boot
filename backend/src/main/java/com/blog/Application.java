package com.blog;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;


/**
 * Created by boro on 07.07.17.
 */


@EnableWebMvc
@SpringBootApplication
@EntityScan(basePackages= "com.blog.models")
@EnableJpaRepositories(basePackages= "com.blog.repositories")
public class Application {
        public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
