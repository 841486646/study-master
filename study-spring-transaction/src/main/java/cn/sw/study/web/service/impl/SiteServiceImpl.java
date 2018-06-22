package cn.sw.study.web.service.impl;

import cn.sw.study.web.dao.SiteMapper;
import cn.sw.study.web.model.Site;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service("siteService")
public class SiteServiceImpl {
    @Autowired
    SiteMapper siteMapper;

//    @Transactional
//    @Transactional(value = "transactionManager_other", rollbackFor = Exception.class)
     public void addOne() {
        Site record = new Site();
        record.setAppId("12345");
        record.setCreateTime(new Date());
        record.setDomain("sw.com");
        record.setSitePath("sw");
        record.setSiteName("sw");
        record.setShortName("sw");
        siteMapper.insertSelective(record);

        int i = 1/0;    // 测试事物的回滚
    }
}
