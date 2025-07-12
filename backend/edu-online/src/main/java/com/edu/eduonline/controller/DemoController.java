package com.edu.eduonline.controller;

import com.edu.eduonline.common.result.Result;
import com.edu.eduonline.pojo.dto.DemoDto;
import com.edu.eduonline.service.DemoService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/demo")
public class DemoController {

    @Resource
    private DemoService demoService;


    @PostMapping("/add")
    public Result<?> add(@RequestBody DemoDto demoDto) {
        demoService.add(demoDto);
        return Result.success("添加成功");
    }

}
