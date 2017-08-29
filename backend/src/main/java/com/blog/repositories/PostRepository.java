package com.blog.repositories;

/**
 * Created by boro on 08.07.17.
 */

import com.blog.models.Post;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends CrudRepository<Post, Long> {
}