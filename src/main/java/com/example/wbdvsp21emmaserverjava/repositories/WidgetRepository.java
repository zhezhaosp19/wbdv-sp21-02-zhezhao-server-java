package com.example.wbdvsp21emmaserverjava.repositories;

import com.example.wbdvsp21emmaserverjava.models.Widget;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.*;

//create read update and delete repository
public interface WidgetRepository extends CrudRepository<Widget, Long> {
    @Query(value = "SELECT * FROM widgets WHERE topic_id = :tid", nativeQuery = true)
    public List<Widget> findWidgetsForTopic(@Param("tid") String topicId);
}
