package cn.sw.study.web.dao;

import cn.sw.study.web.model.Site;
import cn.sw.study.web.model.SiteExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface SiteMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_site
     *
     * @mbggenerated
     */
    int countByExample(SiteExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_site
     *
     * @mbggenerated
     */
    int deleteByExample(SiteExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_site
     *
     * @mbggenerated
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_site
     *
     * @mbggenerated
     */
    int insert(Site record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_site
     *
     * @mbggenerated
     */
    int insertSelective(Site record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_site
     *
     * @mbggenerated
     */
    List<Site> selectByExample(SiteExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_site
     *
     * @mbggenerated
     */
    Site selectByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_site
     *
     * @mbggenerated
     */
    int updateByExampleSelective(@Param("record") Site record, @Param("example") SiteExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_site
     *
     * @mbggenerated
     */
    int updateByExample(@Param("record") Site record, @Param("example") SiteExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_site
     *
     * @mbggenerated
     */
    int updateByPrimaryKeySelective(Site record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_site
     *
     * @mbggenerated
     */
    int updateByPrimaryKey(Site record);
}