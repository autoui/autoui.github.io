<template>
    <div class="datetimepicker-wrap">
        <div class="datetimepicker-mask"></div>
        <div class="datetimepicker">
            <div class="datetimepicker-ctrlbar">
                <a href="javascript:;" class="datetimepicker-btn_cancel">取消</a>
                <a href="javascript:;" class="datetimepicker-btn_confirm">确定</a>
            </div>
            <div class="datetimepicker-yearmonth">
                <i class="prev-year"></i>
                <i class="prev-month"></i>
                <div class="datetimepicker-yearmonth-t">
                    <em class="datetimepicker-year">{{ currentYear }}</em>
                    <em class="datetimepicker-month">{{ currentMonth + 1 }}</em>
                </div>
                <i class="next-month"></i>
                <i class="next-year"></i>
            </div>
            <div class="datetimepicker-dates">
                <div class="datetimepicker-weekdays">
                    <div class="datetimepicker-weekday" v-for="(weekday,index) in weekdays" :key="index">
                        {{weekday}}
                    </div>
                </div>

                <div class="datetimepicker-dates-wrap">
                    <div class="datetimepicker-date" v-for="dateObj in dateObjs" :key="dateObj.id">
                        <div class="datetimepicker-date-inner" :class="[{ 'active': dateObj.isSelected }, dateObj.stage + '-month']">
                            {{ dateObj.date }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'datetime-picker',

    data () {
        return {
            weekdays: ['日', '一', '二', '三', '四', '五', '六']
            // dateObjs: []
            // currentYear: null,
            // currentMonth: null,
            // currentDate: null
        }
    },

    props: {
        // initTimestamp length === 13
        initTimestamp: String
    },

    computed: {
        initDateTime () {
            return this.initTimestamp ? new Date( this.initTimestamp ) : new Date();
        },
        currentYear () {
            return this.initDateTime.getFullYear()
        },

        currentMonth () {
            return this.initDateTime.getMonth()
        },

        currentDate () {
            return this.initDateTime.getDate()
        },

        dateObjs () {
            let that = this;

            // 设置选中年月日
            let year = this.currentYear || dateTime.getFullYear(),
                month = this.currentMonth || dateTime.getMonth(), // month value: [0, ... , 11]
                date = this.currentDate || dateTime.getDate();

            let dateArr = (function( y, m, d ){
                let dateLen = that.__getDateLength( y, m+1 ),
                    __dateArr = [];

                for ( let i = 0; i<dateLen; i++ ) {
                    __dateArr.push({
                        year: y,
                        month: m + 1,
                        date: i + 1,
                        weekday: that.__getWeekday( y, m+1, i+1 ),
                        isSelected: i + 1 === d,
                        stage: 'current'
                    })
                }

                //
                if ( that.__getWeekday( y, m+1, 1 ) !== 0 ) {
                    let prevDateLen = that.__getWeekday( y, m+1, 1 );

                    for ( let j = 0; j < prevDateLen; j++ ) {
                        let prevDateObj = new Date( year, m, -j );

                        __dateArr.unshift({
                            year: prevDateObj.getFullYear(),
                            month: prevDateObj.getMonth() + 1,
                            date: prevDateObj.getDate(),
                            weekday: that.__getWeekday( prevDateObj.getFullYear(), prevDateObj.getMonth() + 1, prevDateObj.getDate() ),
                            stage: 'prev'
                        })
                    }
                }

                //
                if ( that.__getWeekday( y, m+1, dateLen ) !== 6 ) {
                    let nextDateLen = 6 - that.__getWeekday( y, m+1, dateLen );

                    for ( let k = 0; k < nextDateLen; k++ ) {
                        let nextDateObj = new Date( year, m+1, k+1 );

                        __dateArr.push({
                            year: nextDateObj.getFullYear(),
                            month: nextDateObj.getMonth() + 1,
                            date: nextDateObj.getDate(),
                            weekday: that.__getWeekday( nextDateObj.getFullYear(), nextDateObj.getMonth() + 1, nextDateObj.getDate() ),
                            stage: 'next'
                        })
                    }
                }

                return __dateArr;
            })( year, month, date );

            return dateArr;
        }
    },

    methods: {
        __getDateLength ( year, month ) {
            // month = [1, ..., 12]月
            var date = new Date(year, month, 1);

            date.setDate( date.getDate() - 1 );

            return date.getDate();
        },

        // return weekday [0, ... , 6]
        __getWeekday( year, month, date ) {
            // month  = [1, ..., 12]月
            return ( new Date( year, month-1, date ) ).getDay()
        }
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.datetimepicker-wrap {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    .datetimepicker-mask {
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.2);
    }

    .datetimepicker {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: #fff;

        .datetimepicker-ctrlbar {
            display: flex;
            padding: 10px .26666667rem/* 20px */;
            border-top: 1px solid #e5e5e5;
            border-bottom: 1px solid #e5e5e5;
            justify-content: space-between;

            .datetimepicker-btn_cancel,
            .datetimepicker-btn_confirm {
                display: inline-block;
                padding: .10666667rem/* 8px */ .4rem/* 30px */;
                // border: 1px solid #e5e5e5;
                font-size: .37333333rem/* 28px */;
                line-height: .53333333rem/* 40px */;
                color: #38f;
            }
            .datetimepicker-btn_confirm {}
        }

        .datetimepicker-yearmonth {
            display: flex;
            padding: .13333333rem/* 10px */ .26666667rem/* 20px */;
            justify-content: space-between;
            align-items: center;

            .prev-year {
                display: inline-block;
                width: .26666667rem/* 20px */;
                height: .26666667rem/* 20px */;
                margin-right: .26666667rem/* 20px */;
                border-left: 1px solid #38f;
                border-bottom: 1px solid #38f;
                transform: rotateZ(45deg);
                transform-origin: center;
            }
            .prev-month {
                position: relative;
                display: inline-block;
                width: .26666667rem/* 20px */;
                height: .26666667rem/* 20px */;
                border-left: 1px solid #38f;
                border-bottom: 1px solid #38f;
                transform: rotateZ(45deg);
                transform-origin: center;

                &:after {
                    content: '';
                    position: absolute;
                    top: -12px;
                    left: 10px;
                    display: inline-block;
                    width: .26666667rem/* 20px */;
                    height: .26666667rem/* 20px */;
                    border-left: 1px solid #38f;
                    border-bottom: 1px solid #38f;
                    // transform: rotateZ(45deg);
                }
            }
            .next-month {
                position: relative;
                display: inline-block;
                width: .26666667rem/* 20px */;
                height: .26666667rem/* 20px */;
                border-top: 1px solid #38f;
                border-right: 1px solid #38f;
                transform: rotateZ(45deg);
                transform-origin: center;

                &:after {
                    content: '';
                    position: absolute;
                    top: 10px;
                    left: -12px;
                    display: inline-block;
                    width: .26666667rem/* 20px */;
                    height: .26666667rem/* 20px */;
                    border-top: 1px solid #38f;
                    border-right: 1px solid #38f;
                    // transform: rotateZ(45deg);
                }
            }
            .next-year {
                display: inline-block;
                width: .26666667rem/* 20px */;
                height: .26666667rem/* 20px */;
                margin-left: .26666667rem/* 20px */;
                border-top: 1px solid #38f;
                border-right: 1px solid #38f;
                transform: rotateZ(45deg);
                transform-origin: center;
            }

            .datetimepicker-yearmonth-t {
                flex-grow: 1;
            }
            .datetimepicker-year,
            .datetimepicker-month {
                font-size: .42666667rem/* 32px */;
            }
            .datetimepicker-month {
                margin-left: .13333333rem/* 10px */;
            }
        }

        .datetimepicker-dates {
            .datetimepicker-weekdays {
                display: flex;
                padding: .13333333rem/* 10px */;
                justify-content: space-around;
                background-color: #fafafa;

                .datetimepicker-weekday {}
            }

            .datetimepicker-dates-wrap {
                display: flex;
                padding: .13333333rem/* 10px */;
                justify-content: space-around;
                // background-color: #fafafa;
                flex-wrap: wrap;

                .datetimepicker-date {

                    margin-right: 1.5%;
                    padding-bottom: 1.5%;
                    width: 13%;

                    .datetimepicker-date-inner {
                        display: flex;
                        position: relative;
                        height: 1.26533333rem;
                        height: 12.65333333vw;
                        align-items: center;
                        justify-content: center;

                        &.next-month,
                        &.prev-month {
                            color: #999;
                        }

                        &.active {
                            background-color: #38f;
                            color: #fff;
                        }
                    }
                }

                .datetimepicker-date:nth-child(7n) {
                    margin-right: 0;
                }
            }
        }
    }
}
</style>
