package com.edu.eduonline.service;

import com.edu.eduonline.mapper.DemoMapper;
import com.edu.eduonline.pojo.dto.DemoDto;
import com.edu.eduonline.pojo.entity.Demo;
import jakarta.annotation.Resource;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

/**
 * @author pro
 */
@Service
public class DemoService {

    @Resource
    private DemoMapper demoMapper;

    public void add(DemoDto demoDto) {
        Demo demo = Demo.builder().build();
        BeanUtils.copyProperties(demoDto, demo);
        demoMapper.insert(demo);
    }
}
