package com.bear.whizzle.recommend.controller.dto;

import java.net.URL;
import javax.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RecWhiskyResponseDto {

    @NotNull
    private Long id;

    @NotNull
    private String name;

    private URL imageUrl;

    private String category;

    private String location;

    private Integer priceTier;

    private Float abv;

    @Builder.Default
    private Integer reviewCount = 0;

    @Builder.Default
    private Float avgRating = 0f;

    @Builder.Default
    private Boolean isKept = false;

}
