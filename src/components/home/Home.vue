<template>
  <div class="pop" style="width: 710px;">
    <div class="pop-header pop-header-gra clearfix">
      <div class="pop-title pop-title-infor fl ">学生答题详情</div>
      <div class="control fr">
        <a class="pop-close" href="javascript:;" @click="close"><span></span></a>
      </div>
    </div>
    <div class="pop_content studAnswerDet clearfix">
      <div class="itemBox fl">
        <h6 class="itemBox-tit">答题概况</h6>
        <div class="itemBox-cont all">
          <p class="total">参与总人数：<b>{{allStudentsNums}}</b>人</p>
          <p class="complete">已完成：<b>{{hasFinishedNums}}</b>人</p>
          <p class="unComplete">未完成：<b>{{notFinishedNums}}</b>人</p>
          <div class="attention">
            <h6>需要关注的学生：</h6>
            <div class="list" v-if="notFinishedNums !== 0">
              <a v-for="student in fousStudents">{{student.terminalNum}}<span>{{student.name}}</span></a>
            </div>
            <div class="nodata" v-else>所有题目都完成了，快去讲题吧！</div>
            <!-- 没有数据 -->
            <!-- <h5 class="nodata">所有同学都作答完毕，快去讲题吧！</h5> -->
          </div>
        </div>
      </div>
      <div class="itemBox fl">
        <h6 class="itemBox-tit">未答题目分布图</h6>
        <div class="itemBox-cont chartDiv">
          <!-- 没有数据 -->
          <div id="pie" style="width: 310px;height:240px;" v-if="notFinishedNums !== 0" key="1"></div>
          <div class="nodata" v-else  key="2">所有题目都完成了，快去讲题吧！</div>
        </div>
      </div>
      <div class="itemBox fl">
        <h6 class="itemBox-tit">未完成作答：18人</h6>
        <div id="noAnswerList" class="itemBox-cont">
          <table v-if="notFinishedNums !== 0">
            <thead>
            <tr>
              <th width="7%">学号</th>
              <th width="16%">姓名</th>
              <th width="77%" @click="seq">待完成</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(student, index) in allStudents" :key="student.id">
              <td>{{student.terminalNum}}</td>
              <td>{{student.name}}</td>
              <td>
                <span v-for="list in student.noAnswersList.slice(0, 7)">第{{list + 1}}题</span>
                <a class="more" @click="showMore(index)" v-show="student.noAnswersList.length > 7">更多</a>
                <div class="morelist" style="display: block"
                     v-show="student.moreShow && student.noAnswersList.length > 7">
                  <span
                    v-for="list in student.noAnswersList.slice(7, student.noAnswersList.length+1)">第{{list + 1}}题</span>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
          <div class="nodata" v-else>所有题目都完成了，快去讲题吧！</div>
          <!-- 没有数据 -->
          <!-- <div class="nodata">所有同学都作答完毕，快去讲题吧！</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import winTool from '@/assets/js/winTool'
  // 引入 ECharts 主模块
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图
  require('echarts/lib/chart/pie')
  // 引入提示框和标题组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  export default {
    name: 'home',
    data () {
      return {
        allStudentsNums: 0,
        allStudents: [],
        answersDetails: [],
        fousStudents: [],
        hasFinishedNums: 0,
        notFinishedNums: 0
      }
    },
    created () {
      if (global.multiAnswerDetailViewParams) {
        console.log(global.multiAnswerDetailViewParams)
        this.allStudentsNums = global.multiAnswerDetailViewParams.allStudentsNums
        this.allStudents = global.multiAnswerDetailViewParams.allStudents
        this.answersDetails = global.multiAnswerDetailViewParams.answersDetails
        this.fousStudents = global.multiAnswerDetailViewParams.fousStudents
        this.hasFinishedNums = global.multiAnswerDetailViewParams.hasFinishedNums
        this.notFinishedNums = global.multiAnswerDetailViewParams.notFinishedNums
      }
      winTool.win.on('setOpt', () => {
        console.log(global.multiAnswerDetailViewParams)
        this.allStudents = global.multiAnswerDetailViewParams.allStudents
        this.answersDetails = global.multiAnswerDetailViewParams.answersDetails
        this.fousStudents = global.multiAnswerDetailViewParams.fousStudents
        this.hasFinishedNums = global.multiAnswerDetailViewParams.hasFinishedNums
        this.notFinishedNums = global.multiAnswerDetailViewParams.notFinishedNums
        this.initCharts(this.opt)
      })
    },
    mounted () {
      this.initCharts(this.opt)
    },
    computed: {
      opt () {
        let opt = {
          tooltip: {
            trigger: 'item',
            formatter: '{b} <br/>{c}人 ({d}%)'
          },
          series: {
            type: 'pie',
            data: this.answersDetails,
            label: {
              normal: {
                position: 'inner',
                formatter: '{b} \n {c}人'
              }
            }
          }
        }
        return opt
      }
    },
    methods: {
      showMore (index) {
        console.log(index)
        this.allStudents[index].moreShow = !this.allStudents[index].moreShow
        console.log(this.allStudents[index].moreShow)
      },
      initCharts (opt) {
        echarts.init(document.getElementById('pie')).setOption(opt)
      },
      seq () {
        this.allStudents = this.allStudents.reverse()
      },
      close () {
        winTool.win.emit('_close')
      }
    }
  }
</script>

<style scoped lang="stylus">
  .pop
    margin auto
</style>
