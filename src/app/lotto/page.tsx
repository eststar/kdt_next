"use client"
import TailBall from '@/components/TailBall';
import TailButton from '@/components/TailButton';
import { useState } from 'react';

export default function Lotto() {

  const [lottoArr, setlottoArr] = useState<React.ReactElement[]>([]); //버튼클릭하면 값을 생성해서 바뀔 배열 변수

  const generateLotto = () => {
    let tempNum : number;
    let numArr : number[] = [];
    const numSet : Set<number> = new Set();
    while(numSet.size < 7){
      tempNum = Math.floor(Math.random() * 45 + 1);
      numSet.add(tempNum);
    }
    
    numArr = Array.from(numSet);
    const bonusNum = numArr.pop();
    numArr.sort((o1, o2) => o1 - o2);
    
    let tempArr = numArr.map((num) =>        
        <TailBall lottoNum={num} key={num}/>
    );
    
    let resultArr = [...tempArr, <div className={`h-20 w-20 rounded-full bg-white-500 text-black text-xl font-bold  flex justify-center items-center`} key="plus">+</div>];
    resultArr = [...resultArr, <TailBall lottoNum={bonusNum ? bonusNum : undefined} key={bonusNum}/>];
    
    setlottoArr(resultArr);
  };

  return (
    <div className='w-full h-full flex flex-col justify-center items-center mx-auto'>
      <div className='h-2/3 flex flex-row justify-between items-center gap-2'>        
        {lottoArr}
      </div>
      <div className='h-1/3 mt-6'>
        <TailButton bColor="blue" caption="로또번호생성" onHandle={generateLotto} />
      </div>
    </div>
  )
}
