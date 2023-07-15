import items from './data';
import Select from './components/Select';
import UnitCard from './components/UnitCard';
import { useEffect, useState } from 'react';

function App() {

    const [itemId,setItemId]=useState(1);
    const [item,setItem]=useState({});
    const [cardOneInfo,setCardOneInfo]=useState({key:'',value:''});
    const [cardTwoInfo,setCardTwoInfo]=useState({key:'',value:''});
    const [furmulaObj,setFurmulaObj]=useState({});
    const [error,setError]=useState('')

    useEffect(()=>{
      setCardOneInfo({...cardOneInfo,key: item?.units? item?.units[0]?.id:''})
      setCardTwoInfo({...cardTwoInfo,key: item?.units? item?.units[1]?.id:''})
    },[item])

    useEffect(()=>{
      if(cardOneInfo.key===cardTwoInfo.key){
        setError('Two units can be same')
    }else{
      setError('')
    }
    },[cardOneInfo.key,cardTwoInfo.key])

    const resultCalculation =(key,furmulaObj,value)=>{
      if(value){
        const exeFurmula = furmulaObj?.furmulas?.find((furmula)=>furmula.name!==key);
      if(exeFurmula){
        const formattedFormula = exeFurmula.furmula.replace(/\s/g, '');
        const furmulaWithValue = formattedFormula.replace(key,value).toString()
        return eval(furmulaWithValue)
      }
      }
    }

    const handleInputFields = (e)=>{
      const {id,value} = e.target;
      if(id===cardOneInfo.key){
        setCardOneInfo({...cardOneInfo,value:value})
        const result = resultCalculation(cardOneInfo.key,furmulaObj,value)
        setCardTwoInfo({...cardTwoInfo,value:result})
      } else if(id===cardTwoInfo.key){
        setCardTwoInfo({...cardTwoInfo,value:value})
        const result = resultCalculation(cardTwoInfo.key,furmulaObj,value)
        setCardOneInfo({...cardOneInfo,value:result})
      }
    }

    const handleSetItemId = (e)=>{
      setItemId(e.target.value);
    }
    const handleSetCardOneKey = (e)=>{
      setCardOneInfo({...cardOneInfo,key:e.target.value})
    }
    const handleSetCardTwoKey = (e)=>{
      setCardTwoInfo({...cardTwoInfo,key:e.target.value})
    }

    useEffect(()=>{
      setCardOneInfo({key:'',value:''})
      setCardTwoInfo({key:'',value:''})
      const item = items.find((item)=>item.id==itemId)
      setItem(item)
    },[itemId])

    useEffect(()=>{
      const keyArray = [`${cardOneInfo.key}-${cardTwoInfo.key}`,`${cardTwoInfo.key}-${cardOneInfo.key}`];
      const furmulaObj = item?.allFurmulas?.find((group)=>keyArray.some((key)=>group.id.includes(key)))
      setFurmulaObj(furmulaObj)
    },[cardOneInfo.key,cardTwoInfo.key,item?.allFurmulas])

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-[#F0FFFF] shadow-lg rounded-lg p-6 w-full md:w-1/2 border">
        <h1 className="text-center text-gray-800 font-bold text-2xl py-5">Mass Converter</h1>

        <div className="px-5">
          <Select data={items} key={"select"} setId={handleSetItemId} />
        </div>

        <div className="flex flex-col md:flex-row justify-around py-5">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <UnitCard
              data={item?.units}
              key={"cardOne"}
              setId={handleSetCardOneKey}
              cardInfo={cardOneInfo}
              onChange={handleInputFields}
              error={error}
            />
          </div>
          <div className="flex items-center">
            <span className="font-extrabold text-3xl"> = </span>
          </div>
          <div className="w-full md:w-auto">
            <UnitCard
              data={item?.units}
              key={"cardTwo"}
              setId={handleSetCardTwoKey}
              cardInfo={cardTwoInfo}
              onChange={handleInputFields}
              error={error}
            />
          </div>
        </div>
        {error && (
          <div className="mb-4 rounded-lg bg-orange-300 px-6 py-2 text-base text-gray-900" role="alert">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
