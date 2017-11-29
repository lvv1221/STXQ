<template>
  <div class="pop" style="width: 710px;">
    <div class="pop-header pop-header-gra clearfix">
      <div class="pop-title pop-title-infor fl ">学生答题详情</div>
      <div class="control fr">
        <a class="pop-close" href="javascript:;"><span></span></a>
      </div>
    </div>
    <div class="pop_content studAnswerDet clearfix">
      <div class="itemBox fl">
        <h6 class="itemBox-tit">答题概况</h6>
        <div class="itemBox-cont all">
          <p class="total">参与总人数：<b>50</b>人</p>
          <p class="complete">已完成：<b>30</b>人</p>
          <p class="unComplete">未完成：<b>20</b>人</p>
          <div class="attention">
            <h6>需要关注的学生：</h6>
            <div class="list">
              <a>001<span>刘伟</span></a>
              <a>002<span>张五一</span></a>
              <a>003<span>刘晓阳</span></a>
              <a>004<span>周文斌</span></a>
            </div>
            <!-- 没有数据 -->
            <!-- <h5 class="nodata">所有同学都作答完毕，快去讲题吧！</h5> -->
          </div>
        </div>
      </div>
      <div class="itemBox fl">
        <h6 class="itemBox-tit">未答题目分布图</h6>
        <div class="itemBox-cont chartDiv">
          <!-- 没有数据 -->
          <div class="nodata">所有题目都完成了，快去讲题吧！</div>
        </div>
      </div>
      <div class="itemBox fl">
        <h6 class="itemBox-tit">未完成作答：18人</h6>
        <div id="noAnswerList" class="itemBox-cont">
          <table>
            <thead>
            <tr>
              <th width="7%">学号</th>
              <th width="16%">姓名</th>
              <th width="77%">待完成</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>001</td>
              <td>张三</td>
              <td>
                <span>第1题</span>
                <span>第2题</span>
                <span>第3题</span>
                <span>第4题</span>
                <span>第5题</span>
                <span>第6题</span>
                <span>第7题</span>
                <a class="more">更多</a>
                <div class="morelist" style="display: block;">
                  <span>第1题</span>
                  <span>第2题</span>
                  <span>第3题</span>
                  <span>第4题</span>
                  <span>第5题</span>
                  <span>第6题</span>
                  <span>第7题</span>
                  <span>第1题</span>
                  <span>第2题</span>
                  <span>第3题</span>
                  <span>第4题</span>
                  <span>第5题</span>
                  <span>第6题</span>
                  <span>第7题</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>001</td>
              <td>张三张三张三张三张三</td>
              <td>
                <span>第1题</span>
                <span>第2题</span>
              </td>
            </tr>
            <tr>
              <td>001</td>
              <td>张三张三张三张三张三</td>
              <td>
                <span>第1题</span>
                <span>第2题</span>
              </td>
            </tr>
            <tr>
              <td>001</td>
              <td>张三张三张三张三张三</td>
              <td>
                <span>第1题</span>
                <span>第2题</span>
              </td>
            </tr>
            <tr>
              <td>001</td>
              <td>张三张三张三张三张三</td>
              <td>
                <span>第1题</span>
                <span>第2题</span>
              </td>
            </tr>
            <tr>
              <td>001</td>
              <td>张三</td>
              <td>
                <span>第1题</span>
                <span>第2题</span>
                <span>第3题</span>
                <span>第4题</span>
                <span>第5题</span>
                <span>第6题</span>
                <span>第7题</span>
                <a class="more">更多</a>
                <div class="morelist" style="display: none;">
                  <span>第1题</span>
                  <span>第2题</span>
                  <span>第3题</span>
                  <span>第4题</span>
                  <span>第5题</span>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
          <!-- 没有数据 -->
          <!-- <div class="nodata">所有同学都作答完毕，快去讲题吧！</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style scoped lang="stylus">
.pop
  margin auto
</style>
