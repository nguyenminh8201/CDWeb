import React, { Component } from 'react'
import Header from './HeaderAd'
import MenuSidebar from './MenuSidebar'

export default class CategoryManager extends Component {
  render() {
    return (
        <div className="page-wrapper">
            <MenuSidebar/>
        <div className="page-container">
        <Header/>
        {/* <!-- DATA TABLE--> */}
        <div>
        <section className="p-t-20">
            <div className="container main-content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-data__tool">
                            <div className="table-data__tool-left">
                                <span className=" title-2">Danh sách danh mục</span>

                            </div>

                            {/* <!--  nút thêm danh mục hiện ra modal--> */}
                            <div className="table-data__tool-right">
                                <button type="button" className="au-btn au-btn-icon au-btn--green au-btn--small"
                                        data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">
                                    <i className="zmdi zmdi-plus">Thêm danh mục</i>
                                </button>

                            </div>
                        </div>
                        <div className="table-responsive m-b-40">
                            <table className="table table-borderless table-data3">
                                <thead>
                                <tr>
                                    <th className="text-center text-white">STT</th>
                                    <th className="text-center text-white">Tên danh mục</th>
                                    <th className="text-center text-white">Ảnh minh họa</th>
                                    <th className="text-center text-white">Số lượng mặt hàng</th>
                                    <th></th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="text-center align-middle">1</td>
                                    <td className="text-center align-middle">Hoa sinh nhật</td>
                                    <td className="text-center align-middle">
                                        <img className="img-120"
                                             src="https://tools.dalathasfarm.com/public/products/1638/1638325734/p4u-(10)wm_800x800.jpg"
                                             alt="Colorlib Template" />
                                    </td>
                                    <td className="align-middle text-center">100</td>
                                    <td className="align-middle">
                                        <div className="table-data-feature">
                                            <button type="button" className="item" data-toggle="modal" data-placement="top"
                                                    data-target="#Modal-chinhsua"
                                                    title="Chỉnh sửa thông tin danh mục">
                                                <i className="zmdi zmdi-edit"></i>
                                            </button>
                                            <button type="button" className="item" data-placement="top"
                                                    data-toggle="modal" data-target="#exampleModalCenter"
                                                    title="Xóa danh mục">
                                                <i className="zmdi zmdi-delete"></i>
                                            </button>
                                            <button type="button" className="item" data-toggle="modal" data-placement="top"
                                                    data-target="#modalCart"
                                                    title="Xem chi tiết danh mục">
                                                <i className="zmdi zmdi-more"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center align-middle">1</td>
                                    <td className="text-center align-middle">Hoa sinh nhật</td>
                                    <td className="text-center align-middle">
                                        <img className="img-120"
                                             src="https://tools.dalathasfarm.com/public/products/1638/1638325734/p4u-(10)wm_800x800.jpg"
                                             alt="Colorlib Template"/>
                                    </td>
                                    <td className="align-middle text-center">100</td>
                                    <td className="align-middle">
                                        <div className="table-data-feature">
                                            <button className="item" data-toggle="tooltip" data-placement="top"
                                                    title="Chỉnh sửa thông tin danh mục">
                                                <i className="zmdi zmdi-edit"></i>
                                            </button>
                                            <button className="item" data-toggle="tooltip" data-placement="top"
                                                    title="Xóa danh mục">
                                                <i className="zmdi zmdi-delete"></i>
                                            </button>
                                            <button className="item" data-toggle="tooltip" data-placement="top"
                                                    title="Xem chi tiết danh mục">
                                                <i className="zmdi zmdi-more"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center align-middle">1</td>
                                    <td className="text-center align-middle">Hoa sinh nhật</td>
                                    <td className="text-center align-middle">
                                        <img className="img-120"
                                             src="https://tools.dalathasfarm.com/public/products/1638/1638325734/p4u-(10)wm_800x800.jpg"
                                             alt="Colorlib Template"/>
                                    </td>
                                    <td className="align-middle text-center">100</td>
                                    <td className="align-middle">
                                        <div className="table-data-feature">
                                            <button className="item" data-toggle="tooltip" data-placement="top"
                                                    title="Chỉnh sửa thông tin danh mục">
                                                <i className="zmdi zmdi-edit"></i>
                                            </button>
                                            <button className="item" data-toggle="tooltip" data-placement="top"
                                                    title="Xóa danh mục">
                                                <i className="zmdi zmdi-delete"></i>
                                            </button>
                                            <button className="item" data-toggle="tooltip" data-placement="top"
                                                    title="Xem chi tiết danh mục">
                                                <i className="zmdi zmdi-more"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center align-middle">1</td>
                                    <td className="text-center align-middle">Hoa sinh nhật</td>
                                    <td className="text-center align-middle">
                                        <img className="img-120"
                                             src="https://tools.dalathasfarm.com/public/products/1638/1638325734/p4u-(10)wm_800x800.jpg"
                                             alt="Colorlib Template"/>
                                    </td>
                                    <td className="align-middle text-center">100</td>
                                    <td className="align-middle">
                                        <div className="table-data-feature">
                                            <button className="item" data-toggle="tooltip" data-placement="top"
                                                    title="Chỉnh sửa thông tin danh mục">
                                                <i className="zmdi zmdi-edit"></i>
                                            </button>
                                            <button className="item" data-toggle="tooltip" data-placement="top"
                                                    title="Xóa danh mục">
                                                <i className="zmdi zmdi-delete"></i>
                                            </button>
                                            <button className="item" data-toggle="tooltip" data-placement="top"
                                                    title="Xem chi tiết danh mục">
                                                <i className="zmdi zmdi-more"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center align-middle">1</td>
                                    <td className="text-center align-middle">Hoa sinh nhật</td>
                                    <td className="text-center align-middle">
                                        <img className="img-120"
                                             src="https://tools.dalathasfarm.com/public/products/1638/1638325734/p4u-(10)wm_800x800.jpg"
                                             alt="Colorlib Template"/>
                                    </td>
                                    <td className="align-middle text-center">100</td>
                                    <td className="align-middle">
                                        <div className="table-data-feature">
                                            <button className="item" data-toggle="tooltip" data-placement="top"
                                                    title="Chỉnh sửa thông tin danh mục">
                                                <i className="zmdi zmdi-edit"></i>
                                            </button>
                                            <button className="item" data-toggle="tooltip" data-placement="top"
                                                    title="Xóa danh mục">
                                                <i className="zmdi zmdi-delete"></i>
                                            </button>
                                            <button className="item" data-toggle="tooltip" data-placement="top"
                                                    title="Xem chi tiết danh mục">
                                                <i className="zmdi zmdi-more"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center align-middle">1</td>
                                    <td className="text-center align-middle">Hoa sinh nhật</td>
                                    <td className="text-center align-middle">
                                        <img className="img-120"
                                             src="https://tools.dalathasfarm.com/public/products/1638/1638325734/p4u-(10)wm_800x800.jpg"
                                             alt="Colorlib Template"/>
                                    </td>
                                    <td className="align-middle text-center">100</td>
                                    <td className="align-middle">
                                        <div className="table-data-feature">
                                            <button className="item" data-toggle="tooltip" data-placement="top"
                                                    title="Chỉnh sửa thông tin danh mục">
                                                <i className="zmdi zmdi-edit"></i>
                                            </button>
                                            <button className="item" data-toggle="tooltip" data-placement="top"
                                                    title="Xóa danh mục">
                                                <i className="zmdi zmdi-delete"></i>
                                            </button>
                                            <button className="item" data-toggle="tooltip" data-placement="top"
                                                    title="Xem chi tiết danh mục">
                                                <i className="zmdi zmdi-more"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- END DATA TABLE--> */}
        </div>

      </div>
      </div>
    )
  }
}
