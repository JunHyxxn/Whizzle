package com.bear.whizzle.savedmodel.repository;

import com.bear.whizzle.domain.model.entity.SavedModel;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SavedModelRepository extends JpaRepository<SavedModel, Long> {

    Optional<SavedModel> findTopByOrderByIdDesc();

}
