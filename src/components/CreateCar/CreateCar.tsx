import { Button, Upload } from "antd";
import { CreateCarStyled } from "./StyledCreateCar"
import { UploadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { FormEvent, useContext, useState } from "react";
import { ListCarContext } from "../../context/ListCarContext";


const CreateCar = () => {
  const navigation = useNavigate()
  const [formData, setFormData] = useState({})

  const { saveListCar } = useContext(ListCarContext)

  const handleForm = (key:string ,e: FormEvent<HTMLInputElement>, formData: {})=>{
    const data = {
      ...formData,
      image: './images/car01.min.jpg',
      [key]: e.currentTarget.value
    }

    setFormData(data)
  }

  const handleSubmit = () => {
    saveListCar(formData);
    navigation('/admin/cars')
  };


  return(
    <CreateCarStyled>
      <div className="create-car-header">
        <p>Dashboard {'>'} List Car {'>'} Add New Car</p>
        <div className="create-car-header-title">
          <h1>Add New Car</h1>
        </div>
      </div>
      <div className="create-form">
        <form>
          <div className="create-input-field">
            <label htmlFor="">nama<span>*</span></label>
            <input type="text" required id="name" onChange={(e)=>handleForm('name',e, formData)}/>
          </div>
          <div className="create-input-field">
            <label htmlFor="">Harga<span>*</span></label>
            <input type="Number" id="rentPerDay" required onChange={(e)=>handleForm('rentPerDay',e, formData)}/>
          </div>
          <div className="create-input-field">
            <label htmlFor="">Foto<span>*</span></label>
            <Upload>
              <Button className="button-upload"  icon={<UploadOutlined />}></Button>
            </Upload> 
          </div> 
          <div className="create-input-field">
            <label htmlFor="">Start Rent</label>
            <p>-</p>
          </div>
          <div className="create-input-field">
            <label htmlFor="">Finish Rent</label>
            <p>-</p>
          </div>
          <div className="create-input-field">
            <label htmlFor="">Created At</label>
            <p>-</p>
          </div>
          <div className="create-input-field">
            <label htmlFor="">Updated At</label>
            <p>-</p>
          </div>
          
        </form>
        <div className="create-submit-button">
          <button onClick={()=>navigation('/admin/cars')}>Cancel</button>
          <button onClick={handleSubmit}>Save</button>
        </div>
      </div>
      
    </CreateCarStyled>
  )
}

export default CreateCar