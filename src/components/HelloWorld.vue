<script setup lang="ts">
import { ref, reactive } from "vue";
import config from "../../config";
import planItems, { OptionItem, TimelineItem } from "./planItems";

const reactivePlanItems: OptionItem[] = reactive(planItems);

function verifyWeekWork(timeline: TimelineItem[]) {
    if (timeline.length < 1) return true;
    if (
        timeline[0].timestamp == undefined ||
        timeline[0].timestamp == null ||
        timeline[0].thisweek == undefined ||
        timeline[0].thisweek == null ||
        timeline[0].thisweek.length < 1
    )
        return true;
    const dateString: string = timeline[0].timestamp;
    const [year, month, day] = dateString.split("-").map(Number);
    const targetDate = new Date(2000 + year, month - 1, day);
    const today = new Date();
    const oneWeekAgo = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

    return targetDate <= oneWeekAgo;
}
const activename = ref(
    window.location.hash.slice(1) == undefined ||
        window.location.hash.slice(1) == null ||
        window.location.hash.slice(1).length < 1
        ? reactivePlanItems[0].title
        : reactivePlanItems[parseInt(window.location.hash.slice(1))].title
);
</script>

<template>
    <el-container class="contianer">
        <h1>
            <span class="title">{{ config.title }}</span>
            <span class="select-active">
                <el-select v-model="activename" size="large">
                    <el-option v-for="item in reactivePlanItems" :key="item.title">
                        {{ item.title }}
                        <template v-if="verifyWeekWork(item.timeline)">
                            <el-tag class="mx-1" type="error" effect="plain" size="small"> 本周无进度 </el-tag>
                        </template>
                    </el-option>
                </el-select>
            </span>
        </h1>

        <el-collapse v-model="activename" accordion v-for="item in reactivePlanItems">
            <el-collapse-item :name="item.title">
                <template #title>
                    <h2>
                        <span v-html="item.title"></span>
                        <template v-if="item.isLowPrio != undefined && item.isLowPrio">
                            <el-tag class="mx-1" type="success" effect="plain" size="small"> 低优先级 </el-tag>
                        </template>
                        <template v-if="verifyWeekWork(item.timeline)">
                            <el-tag class="mx-1" type="error" effect="plain" size="small"> 本周无进度 </el-tag>
                        </template>
                    </h2>
                </template>

                <el-timeline>
                    <el-timeline-item :timestamp="item.timeline[0].timestamp" placement="top">
                        <el-card>
                            <el-collapse :model-value="['1', '2']">
                                <el-collapse-item
                                    title="本周工作"
                                    name="1"
                                    v-if="
                                        item.timeline[0].thisweek != undefined && item.timeline[0].thisweek.length > 0
                                    "
                                >
                                    <ul v-for="t in item.timeline[0].thisweek">
                                        <li v-html="t"></li>
                                    </ul>
                                </el-collapse-item>
                                <el-collapse-item
                                    title="下周计划"
                                    name="2"
                                    v-if="
                                        item.timeline[0].nextweek != undefined && item.timeline[0].nextweek.length > 0
                                    "
                                >
                                    <ul v-for="t in item.timeline[0].nextweek">
                                        <li v-html="t"></li>
                                    </ul>
                                </el-collapse-item>
                            </el-collapse>
                            <el-collapse :model-value="['1', '2', '3']">
                                <el-collapse-item
                                    title="待跟进工作"
                                    name="2"
                                    v-if="item.inprogress != undefined && item.inprogress.length > 0"
                                >
                                    <ul v-for="t in item.inprogress">
                                        <li v-html="t"></li>
                                    </ul>
                                </el-collapse-item>
                                <el-collapse-item
                                    title="当前进度"
                                    name="1"
                                    v-if="item.progress != undefined && item.progress.length > 0"
                                >
                                    <ul v-for="t in item.progress">
                                        <li v-html="t"></li>
                                    </ul>
                                </el-collapse-item>
                                <el-collapse-item
                                    title="低优先级工作"
                                    name="3"
                                    v-if="item.lowPrio != undefined && item.lowPrio.length > 0"
                                >
                                    <ul v-for="t in item.lowPrio">
                                        <li v-html="t"></li>
                                    </ul>
                                </el-collapse-item>
                            </el-collapse>
                        </el-card>
                    </el-timeline-item>
                    <template v-for="(timeline, index) in item.timeline.slice(1)">
                        <el-timeline-item :timestamp="timeline.timestamp" placement="top">
                            <el-card>
                                <!-- <el-collapse :model-value="['1', '2']"> -->
                                <el-collapse :model-value="index == 0 ? ['1', '2'] : []">
                                    <el-collapse-item
                                        title="本周工作"
                                        name="1"
                                        v-if="timeline.thisweek != undefined && timeline.thisweek.length > 0"
                                    >
                                        <ul v-for="t in timeline.thisweek">
                                            <li>
                                                <v-html>{{ t }}</v-html>
                                            </li>
                                        </ul>
                                    </el-collapse-item>
                                    <el-collapse-item
                                        title="下周计划"
                                        name="2"
                                        v-if="timeline.nextweek != undefined && timeline.nextweek.length > 0"
                                    >
                                        <ul v-for="t in timeline.nextweek">
                                            <li>
                                                <v-html>{{ t }}</v-html>
                                            </li>
                                        </ul>
                                    </el-collapse-item>
                                </el-collapse>
                            </el-card>
                        </el-timeline-item>
                    </template>
                </el-timeline>
            </el-collapse-item>
        </el-collapse>
    </el-container>
</template>

<style scoped>
:deep(.el-timeline-item__timestamp),
:deep(.el-card .el-collapse-item__header) {
    color: black;
    font-size: larger;
    font-weight: bold;
}
:deep(.el-collapse-item .el-collapse-item__header) {
    height: auto !important;
}
:deep(.el-collapse-item__content) {
    font-size: larger;
}
:deep(.el-tag) {
    margin: 1px 0.5em;
}
.contianer {
    margin: 2em auto;
    max-width: 1200px;
    display: block;
    font-size: larger;
}

.select-active {
    margin-left: 1em;
}
</style>
