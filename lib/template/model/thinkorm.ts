/**
 * @ author: xxx
 * @ copyright: Copyright (c)
 * @ license: Apache License 2.0
 * @ version: 2019-10-16 18:55:16
 */
import { BaseModel } from "thinkorm";
import { Component, Value } from 'koatty';

@Component()
export class <ClassName> extends BaseModel {
    @Value("database", "db")
    config: any;
    modelName: string;
    fields: any;

    init() {
        // 模型名称
        this.modelName = '<ModelName>';
        // 数据表字段信息
        this.fields = {
            id: { //用户ID
                type: 'string',
                pk: true,
                size: 50
            }
        };
    }
}