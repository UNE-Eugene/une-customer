import { Button, Input } from 'annar';
import * as React from 'react';
import { View, Slider, Image, Picker } from 'remax/wechat';
import styles from './index.css'
import moment from 'moment'
export default () => {
  const [dateIn, setDateIn] = React.useState(moment().format("YYYY-MM-DD"))
  const [dateOut, setDateOut] = React.useState(moment().add(1, 'days').format("YYYY-MM-DD"))
  return (
    <View className={styles.searchBody} >
      <View className={styles.searchHeader}>
        <Image src='https://test-1301787690.cos.ap-shanghai.myqcloud.com/%E9%85%92%E5%BA%97%E8%B5%84%E6%96%99/%E4%B8%8A%E6%B5%B7%E4%B8%87%E8%BE%BE%E7%91%9E%E5%8D%8E%E9%85%92%E5%BA%97/%E4%B8%8A%E6%B5%B7%E4%B8%87%E8%BE%BE%E7%91%9E%E5%8D%8E%E9%85%92%E5%BA%97_2.jpg'
          style={{
            height: '100%',
            width: '100%'
          }} />
        <Input className={styles.mainInput} inputStyle={{ height: '65px', padding: '0 10px 0 10px' }} />
        <Button className={styles.mainButton}>搜索</Button>
      </View>
      <View className={styles.searchCard}>
        <text style={{
          position: 'absolute',
          top: '5%',
          left: '5%',
          fontSize: '32px',
          fontWeight: '800'
        }}>条件搜索</text>
        <Input className={styles.searchInput} inputStyle={{ height: '70px', padding: '0 10px 0 10px' }} style={{ top: '15%' }} />
        <Input className={styles.searchInput} inputStyle={{ height: '70px', padding: '0 10px 0 10px' }} style={{ top: '26%' }} />
        <View className={styles.searchInput} inputStyle={{ height: '70px', padding: '0 10px 0 10px' }} style={{ top: '37%' }} >
          <View style={{ position: 'absolute', top: '0', left: '0', height: '70px', width: '50%' }}>
            <Image style={{ position: 'absolute', left: '5px', top: '5px', width: '60px', height: '60px' }} src='https://rac-1300807146.cos.ap-nanjing.myqcloud.com/UNE-WX/calendar.png' />
            <Picker mode="date" value={dateIn} start={dateIn} bindchange={e => { setDateIn(e.detail.value); setDateOut(moment(e.detail.value, "YYYY-MM-DD").add(1, 'days').format("YYYY-MM-DD")) }} >
              <Input inputStyle={{ position: "absolute", top: '0', left: '70px', height: '70px', padding: '0 10px 0 10px' }} disabled value={dateIn} />
            </Picker>
          </View>
          <View style={{ position: 'absolute', top: '0', left: '50%', height: '70px', width: '50%',display: 'flex' }}>
            <text style={{left: '5px', top: '5px', width: '60px', height: '60px',alignSelf:'center' }}>至</text>
            <Picker mode="date" value={dateOut} start={dateOut} bindchange={e => { setDateOut(e.detail.value) }}>
              <Input inputStyle={{ position: "absolute", top: '0', left: '70px', height: '70px', padding: '0 10px 0 10px' }} disabled value={dateOut} />
            </Picker>
          </View>
        </View>

        <Input className={styles.searchInput} inputStyle={{ height: '70px', padding: '0 10px 0 10px' }} style={{ top: '48%' }} />
        <Slider
          min={0}
          max={10000}
          style={{
            position: 'absolute',
            top: '59%',
            left: '5%',
            width: '80%'
          }}
          blockSize={18}
          step={50}
          showValue={true}
          value={10000}
        />
        <Input className={styles.searchInput} inputStyle={{ height: '70px', padding: '0 10px 0 10px' }} style={{ top: '70%' }} />
        <Input className={styles.searchInput} inputStyle={{ height: '70px', padding: '0 10px 0 10px' }} style={{ top: '81%' }} />
      </View>
      <Button className={styles.submitButton}>提交</Button>
    </View >
  )
}