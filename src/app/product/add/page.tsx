"use client"

import { Button, Card, CardBody, CardHeader, Container, Input, Textarea } from "@chakra-ui/react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { createProduct } from "@/actions/product"

export default function ProductAddForm(){

    const validationSchema = Yup.object().shape({
        name:Yup.string().required("gak boleh kosong bro"),
        slug:Yup.string().required(),
        price:Yup.number().min(1000, "paling mahal 1000").required(),
        description:Yup.string().required(),
        stock:Yup.number().required()
    }); 

    const formik = useFormik({
        validationSchema:validationSchema,
        initialValues:{
            name:'',
            slug:'',
            price:0,
            description:'',
            stock:0
        },
        onSubmit:async (values) => {
            await createProduct(values)
        }
    })
        
    return (<div><Container>
        <Card>
            <CardHeader>
                Product Add
            </CardHeader>
            <CardBody>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <label> Name </label>
                        <Input type="text" name="name" id="name" 
                            onChange={formik.handleChange} 
                            value={formik.values.name}
                        />
                    </div>
                    <div>{formik.errors.name && <span style={{color:'red'}}>{formik.errors.name}</span>}</div>
                    <div>
                        <label> Slug </label>
                        <Input type="text" name="slug" id="slug" 
                            onChange={formik.handleChange} 
                            value={formik.values.slug}
                        />

                    </div>
                    <div>{formik.errors.slug && <span style={{color:'red'}}>{formik.errors.slug}</span>}</div>
                    <div>
                        <label> Price </label>
                        <Input type="number" name="price" id="price" 
                            onChange={formik.handleChange} 
                            value={formik.values.price}
                        />
                    </div>
                    <div>{formik.errors.price && <span style={{color:'red'}}>{formik.errors.price}</span>}</div>
                    <div>
                        <label> Stock </label>
                        <Input type="number" name="stock" id="stock" 
                            onChange={formik.handleChange} 
                            value={formik.values.stock}
                        />
                    </div>
                    <div>{formik.errors.stock && <span style={{color:'red'}}>{formik.errors.stock}</span>}</div>
                    <div>
                        <label> Description </label>
                        <Textarea  name="description" id="description" 
                            onChange={formik.handleChange} 
                            value={formik.values.description}
                        />
                    </div>
                    <div>{formik.errors.description && <span style={{color:'red'}}>{formik.errors.description}</span>}</div>
                    <div>
                        <Button type="submit"> Submit </Button>
                    </div>
                </form>
            </CardBody>
        </Card>
    </Container></div>)
}