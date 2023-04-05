package com.bear.whizzle.retrain.controller;

import com.bear.whizzle.retrain.controller.dto.SavedModelRequestDto;
import com.bear.whizzle.retrain.service.RetrainService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class RetrainController {

    private final RetrainService retrainService;

    /**
     * 재학습된 모델 정보 저장
     *
     * @param savedModelRequestDto : 재학습 모델 정보
     */
    @PostMapping("/api/rec/retrain-model/any")
    @ResponseStatus(HttpStatus.OK)
    public void insertSaveeModelData(
            @RequestBody SavedModelRequestDto savedModelRequestDto
    ) {
        retrainService.saveRetrainModel(savedModelRequestDto);
    }

}
