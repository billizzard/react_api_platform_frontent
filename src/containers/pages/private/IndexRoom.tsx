import React from 'react';

import AdminLayoutHoc from '../../../hoc/AdminLayoutHoc'

const IndexRoomPage = () => {
    return (
        <div>
            <div className="card">
                <form className="form-horizontal">
                    <div className="card-body">
                        <h4 className="card-title">Personal Info</h4>
                        <div className="form-group row">
                            <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">First
                                Name</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="fname" placeholder="First Name Here"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="lname" className="col-sm-3 text-right control-label col-form-label">Last
                                Name</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="lname" placeholder="Last Name Here"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="lname"
                                   className="col-sm-3 text-right control-label col-form-label">Password</label>
                            <div className="col-sm-9">
                                <input type="password" className="form-control" id="lname" placeholder="Password Here"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="email1"
                                   className="col-sm-3 text-right control-label col-form-label">Company</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="email1" placeholder="Company Name Here"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="cono1" className="col-sm-3 text-right control-label col-form-label">Contact
                                No</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="cono1" placeholder="Contact No Here"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="cono1"
                                   className="col-sm-3 text-right control-label col-form-label">Message</label>
                            <div className="col-sm-9">
                                <textarea className="form-control"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="border-top">
                        <div className="card-body">
                            <button type="button" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminLayoutHoc(IndexRoomPage)
