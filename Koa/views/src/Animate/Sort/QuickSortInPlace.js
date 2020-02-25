import React from 'react'
import { Button } from 'antd'
import './QuickSortInPlace.scss'
class BubbleSort extends React.Component {
  constructor() {
    super()
    this.state = {
      list: [
        { val: 7 },
        { val: 1 },
        { val: 3 },
        { val: 9 },
        { val: 4 },
        { val: 2 },
        { val: 8 },
        { val: 5 },
        { val: 6 }
      ],
      resetList: [
        { val: 1, index: 0 },
        { val: 2, index: 1 },
        { val: 3, index: 2 },
        { val: 4, index: 3 },
        { val: 5, index: 4 },
        { val: 6, index: 5 },
        { val: 7, index: 6 },
        { val: 8, index: 7 },
        { val: 9, index: 8 }
      ],
      history: [],
      index: 0
    }

    this.state.list.map((item, index) => {
      item.index = index
      item.resetIndex = index
    })
    this.randomList = this.randomList.bind(this)
    this.sort = this.sort.bind(this)
    this.reset = this.reset.bind(this)
    this.next = this.next.bind(this)
    this.quickSort = this.quickSort.bind(this)
  }
  randomList() {
    let originalList = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let randomIndex = 0
    let targetList = []
    let index = 0
    while (originalList.length > 0) {
      randomIndex = Math.floor(Math.random() * originalList.length)
      let val = originalList[randomIndex]
      targetList.push({
        val: val,
        index: index,
        resetIndex: index
      })
      index++
      originalList.splice(randomIndex, 1)
    }
    this.setState({
      list: targetList,
      history: []
    })
    console.log(targetList)
  }

  next() {}
  async sort() {
    let list = this.state.list
    // let list = [7, 1, 3, 9, 6, 2, 8, 5, 4];
    let history = {}
    let index = 0
    let sortedList = this.quickSort(list, 0, list.length - 1, false)
    history = this.state.history
    // console.log(sortedList, history, "sorted");
    let interval = setInterval(() => {
      console.log(index, history, 'interval')
      if (index >= history.length) {
        clearInterval(interval)
      } else {
        this.setState({
          list: history[index].list,
          index: index
        })
        index++
      }
    }, 1500)
  }
  quickSort(
    originalArray,
    inputLo = 0,
    inputHi = arr.length - 1,
    recursiveCall = false
  ) {
    const array = recursiveCall ? originalArray : [...originalArray]
    const resetType = list => {
      list.map(item => {
        if (item.type) item.type = ''
      })
    }
    const partitionArray = (lo, hi) => {
      const swap = (left, right) => {
        const temp = array[left]
        array[left] = array[right]
        array[left].index = right
        array[right] = temp
        array[right].index = left
      }
      const pivot = array[hi]
      pivot.class = 'blink'
      pivot.type = 'pivot'
      let partitionIndex = lo
      for (let i = lo; i < hi; i++) {
        let prePar = partitionIndex >= 1 ? partitionIndex - 1 : 0
        let preIn = i >= 1 ? i - 1 : 0
        array[prePar].class = ''
        array[preIn].class = ''
        array[i].class = 'blink'
        if (array[i].val < pivot.val) {
          array[i].type = 'low'
          swap(partitionIndex, i)
          partitionIndex += 1
        } else {
          array[i].type = 'high'
        }

        let history = this.state.history
        let historyItem = {
          list: JSON.parse(JSON.stringify(array)),
          partion: partitionIndex,
          index: i
        }
        history.push(historyItem)
        this.setState({
          history: history
        })
        // console.log(
        //   JSON.parse(JSON.stringify(array)),
        //   i,
        //   partitionIndex,
        //   lo,
        //   hi,
        //   "sort"
        // );
      }
      swap(partitionIndex, hi)
      array[hi - 1].class = ''
      pivot.class = ''
      resetType(array)
      return partitionIndex
    }
    if (inputLo < inputHi) {
      const partitionIndex = partitionArray(inputLo, inputHi)
      this.quickSort(array, inputLo, partitionIndex - 1, true)
      this.quickSort(array, partitionIndex + 1, inputHi, true)
      let history = this.state.history
      let historyItem = {
        list: JSON.parse(JSON.stringify(array)),
        partion: partitionIndex
      }
      history.push(historyItem)
      this.setState({
        history: history
      })
    }

    return array
  }
  reset() {
    let resetList = this.state.resetList
    this.setState({
      list: resetList
    })
  }
  render() {
    // 渲染数字列表
    let renderItem = () => {
      let data = JSON.parse(JSON.stringify(this.state.list))
      let list = data
      console.log(list, 'render')
      // list.sort((a, b) => {
      //   return a.resetIndex - b.resetIndex;
      // });
      return list.map((item, index) => {
        let style = {
          left: index * 120 + 'px'
        }
        style = Object.assign(style, item.style)
        return (
          <li className={item.class} key={item.val} style={style}>
            {item.val}
          </li>
        )
      })
    }
    // 渲染fieldset
    let renderFieldset = () => {
      let history = JSON.parse(JSON.stringify(this.state.history))
      let historyIndex = this.state.index
      let item = history[historyIndex] || {}
      let partion = item.partion || 0
      let index = item.index || 0
      let lowStart = 0
      let lowEnd = partion - 1 >= 0 ? partion : 0
      let lowLength = lowEnd - lowStart
      let hignStart = partion
      let hignEnd = index
      let lowStyle = {
        width: lowLength * 120 + 'px',
        left: -10 + 'px'
      }
      console.log(item, partion, lowEnd, lowStart, 'fieldset')
      return (
        <fieldset style={lowStyle}>
          <legend>low array</legend>
        </fieldset>
      )
    }
    return (
      <div className="quick-container">
        <ul className="list">{renderItem()}</ul>
        {renderFieldset()}

        <div className="btn-group">
          <Button onClick={this.randomList} type="primary">
            Random11
          </Button>
          <Button onClick={this.sort} type="primary">
            Sort
          </Button>
          <Button onClick={this.next} type="primary">
            Next
          </Button>
          <Button onClick={this.reset} type="primary">
            Reset
          </Button>
        </div>
      </div>
    )
  }
}
export default BubbleSort
