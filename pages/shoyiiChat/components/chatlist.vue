<template>
    <view class="wrap">
        <uni-list>
            <uni-list :border="true" showBadge='false'>
                <view @longtap='longpress(item)' v-for="(item,index) in chatlist" :key='index'>
                    <uni-list-chat class="chat dark-block"
                                   :avatar="item.anotherUserProfile?item.anotherUserProfile:'/static/image/shoyiilogo.png'"
                                   badge-positon="left" :badge-text="item.readCount!=0&&item.readCount?item.readCount:0" clickable
                                   @click="enterChat(item.chatId,item.groupSize,item.anotherUserId,item.anotherUserName,item.anotherUserType,item.caseHistoryId)"
                                   :title="item|groupName" :note="filterText(item.chatMsgDetail.content,item.chatMsgDetail.msgType)">
                        <view class="chat-custom-right">
                            <text class="chat-custom-text" v-if="item.chatMsgDetail.sendTime">{{item.chatMsgDetail.sendTime|relativtime}}</text>
                        </view>
                    </uni-list-chat>
                </view>
            </uni-list>
        </uni-list>
        <u-modal v-model="show" title='删除该聊天' @confirm='delchat' confirm-color='red'
                 :title-style="{color: '#000',fontWeight:'bold'}" confirm-text='删除' :show-cancel-button='true'>
            <view class="slot-content">
                <view class="">
                    删除与
                    <text>"{{chatName}}"</text>
                    的聊天记录
                </view>
            </view>
        </u-modal>
    </view>
</template>
<script>
    import {deleteChatList} from '@/utill/api/connect/connect.js'
    import {relativtime} from '@/utill/tools/timestamp.js'
    export default {
        data() {
            return {
                showBadge: false,
                isRead: 1,
                show: false,
                chatName: '',
                chatdata: {},
            }
        },
        filters: {
            relativtime,
			groupName(val){
				if(val.groupSize){
					var data=val.anotherUserName+'('+ val.groupSize +')'
					return data
				}else{
					return val.anotherUserName
				}
			},
        },
        props: {
            chatlist: {
                type: Array,
                default: () => {
                    return []
                }
            }
        },
        methods: {
			filterText(text,msgType){
				if(msgType=='1'){
					return text
				}else if(msgType=='2'){
					return '[图片]'
				}else if(msgType=='3'){
					return '[手术方法分享]'
				}else if(msgType=='4'){
					return '[文件]'
				}else if(msgType=='5'){
					return '[病例分享]'
				}else if(msgType=='6'){
					return '[语音]'
				}
			},
            enterChat(chatId, gruopSize, id, otherName, type, caseId) {//其他人id,name,群组或者私聊
                console.log(caseId)
				if (gruopSize) {
                    var otherName = otherName + '(' + gruopSize + ')' //群组成员人数
					uni.navigateTo({
						url: '/pages/shoyiiChat/chatWindow?id=' + id + '&chatId=' + chatId + '&otherName=' + otherName + '&type=' + type + '&caseId=' + caseId
					})
                } else {
                    uni.navigateTo({
                        url: '/pages/shoyiiChat/chatWindow?id=' + id + '&chatId=' + chatId + '&otherName=' + otherName + '&type=' + type
                    })
                }
            },
            longpress(item) {
                console.log(item)
                this.chatdata = item
                this.chatName = item.anotherUserName
                this.show = true	//删除列表存在逻辑问题
            },
            // 删除聊天列表
            delchat() {
                console.log(this.chatdata)
                deleteChatList({
                    sendUserType: this.chatdata.userType,
                    sendUserId: this.chatdata.userId,
                    anotherUserType: this.chatdata.anotherUserType,
                    anotherUserId: this.chatdata.anotherUserId,
                }).then(res => {
                    console.log(res)
                    if (res.data.code == 0) {
                        this.$emit('refreshChat')
                    } else {
                        uni.showToast({
                            title: res.data.msg,
                            icon: 'none'
                        })
                    }
                }).catch(err => {
                    console.log(err)
                })
            },
        },
    }
</script>

<style scoped lang="scss">
    .chat /deep/ .uni-ellipsis {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        word-wrap: break-word;
        word-break: break-all;
    }
	// 聊天的title
	.chat /deep/ .uni-list-chat__content-title{
		color: #999;
		font-weight: bold;
	}
    .chat-custom-right {
        flex: 1;
        /* #ifndef APP-NVUE */
        display: flex;
        /* #endif */
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;

        .chat-custom-text {
            font-size: 12px;
            color: #999;
        }

        .await {
            color: #86B0D4;
        }

        .refuse {
            color: red;
        }
    }

    .slot-content {
        font-size: 28rpx;
        color: $u-content-color;
        padding-left: 30rpx;
        padding: 20rpx 20rpx;
        text-align: center;
    }

</style>
