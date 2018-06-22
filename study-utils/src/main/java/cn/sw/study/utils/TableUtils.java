package cn.sw.study.utils;

import cn.sw.study.utils.enums.TableEnum;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by H.CAAHN on 2016/12/11.
 */
public class TableUtils {
    private static Map<Integer, TableEnum> tables = new HashMap<>();

    public static void add(TableEnum tableEnum) {
        tables.put(tableEnum.getId(), tableEnum);
    }

    public static TableEnum get(Long tableId) {
        return tables.get(tableId);
    }

    public static TableEnum getById(String id) {
        if (id == null || id.length() <= 15) {
            return null;
        }
        if (tables.isEmpty()) {
            synchronized (TableUtils.class) {
                if (tables.isEmpty()) {
                    // 这一句是为了初始化TableEnum，即将TableEnum设置到tables中
                    TableEnum t1 = TableEnum.BUILD_INFO;
                }
            }
        }

        String table = id.substring(13, 15);
        Integer key = Integer.valueOf(table, 16);
        if (key != null) {
            return tables.get(key);
        }
        return null;
    }

    public static void main(String[] args) {
        TableEnum t1 = TableEnum.BUILD_INFO;
        TableEnum t = getById("12C8BD9A9E2721F000");
        System.out.println(t);
    }
}
