import React, { Component } from 'react'
import Header from './HeaderAd'
import MenuSidebar from './MenuSidebar'

export default class CategoryManager extends Component {
  render() {
    return (
        <div class="page-wrapper">
            <MenuSidebar/>
        <div class="page-container">
        <Header/>
        {/* <!-- DATA TABLE--> */}
        <div>
        <section class="p-t-20">
            <div class="container main-content">
                <div class="row">
                    <div class="col-md-12">
                        <div class="table-data__tool">
                            <div class="table-data__tool-left">
                                <span class=" title-2">Danh sách danh mục</span>

                            </div>

                            {/* <!--  nút thêm danh mục hiện ra modal--> */}
                            <div class="table-data__tool-right">
                                <button type="button" class="au-btn au-btn-icon au-btn--green au-btn--small"
                                        data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">
                                    <i class="zmdi zmdi-plus">Thêm danh mục</i>
                                </button>

                            </div>
                        </div>
                        <div class="table-responsive m-b-40">
                            <table class="table table-borderless table-data3">
                                <thead>
                                <tr>
                                    <th class="text-center text-white">STT</th>
                                    <th class="text-center text-white">Tên danh mục</th>
                                    <th class="text-center text-white">Ảnh minh họa</th>
                                    <th class="text-center text-white">Số lượng mặt hàng</th>
                                    <th></th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td class="text-center align-middle">1</td>
                                    <td class="text-center align-middle">Hoa sinh nhật</td>
                                    <td class="text-center align-middle">
                                        <img class="img-120"
                                             src="https://tools.dalathasfarm.com/public/products/1638/1638325734/p4u-(10)wm_800x800.jpg"
                                             alt="Colorlib Template" />
                                    </td>
                                    <td class="align-middle text-center">100</td>
                                    <td class="align-middle">
                                        <div class="table-data-feature">
                                            <button type="button" class="item" data-toggle="modal" data-placement="top"
                                                    data-target="#Modal-chinhsua"
                                                    title="Chỉnh sửa thông tin danh mục">
                                                <i class="zmdi zmdi-edit"></i>
                                            </button>
                                            <button type="button" class="item" data-placement="top"
                                                    data-toggle="modal" data-target="#exampleModalCenter"
                                                    title="Xóa danh mục">
                                                <i class="zmdi zmdi-delete"></i>
                                            </button>
                                            <button type="button" class="item" data-toggle="modal" data-placement="top"
                                                    data-target="#modalCart"
                                                    title="Xem chi tiết danh mục">
                                                <i class="zmdi zmdi-more"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center align-middle">1</td>
                                    <td class="text-center align-middle">Hoa sinh nhật</td>
                                    <td class="text-center align-middle">
                                        <img class="img-120"
                                             src="https://tools.dalathasfarm.com/public/products/1638/1638325734/p4u-(10)wm_800x800.jpg"
                                             alt="Colorlib Template"/>
                                    </td>
                                    <td class="align-middle text-center">100</td>
                                    <td class="align-middle">
                                        <div class="table-data-feature">
                                            <button class="item" data-toggle="tooltip" data-placement="top"
                                                    title="Chỉnh sửa thông tin danh mục">
                                                <i class="zmdi zmdi-edit"></i>
                                            </button>
                                            <button class="item" data-toggle="tooltip" data-placement="top"
                                                    title="Xóa danh mục">
                                                <i class="zmdi zmdi-delete"></i>
                                            </button>
                                            <button class="item" data-toggle="tooltip" data-placement="top"
                                                    title="Xem chi tiết danh mục">
                                                <i class="zmdi zmdi-more"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center align-middle">1</td>
                                    <td class="text-center align-middle">Hoa sinh nhật</td>
                                    <td class="text-center align-middle">
                                        <img class="img-120"
                                             src="https://tools.dalathasfarm.com/public/products/1638/1638325734/p4u-(10)wm_800x800.jpg"
                                             alt="Colorlib Template"/>
                                    </td>
                                    <td class="align-middle text-center">100</td>
                                    <td class="align-middle">
                                        <div class="table-data-feature">
                                            <button class="item" data-toggle="tooltip" data-placement="top"
                                                    title="Chỉnh sửa thông tin danh mục">
                                                <i class="zmdi zmdi-edit"></i>
                                            </button>
                                            <button class="item" data-toggle="tooltip" data-placement="top"
                                                    title="Xóa danh mục">
                                                <i class="zmdi zmdi-delete"></i>
                                            </button>
                                            <button class="item" data-toggle="tooltip" data-placement="top"
                                                    title="Xem chi tiết danh mục">
                                                <i class="zmdi zmdi-more"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center align-middle">1</td>
                                    <td class="text-center align-middle">Hoa sinh nhật</td>
                                    <td class="text-center align-middle">
                                        <img class="img-120"
                                             src="https://tools.dalathasfarm.com/public/products/1638/1638325734/p4u-(10)wm_800x800.jpg"
                                             alt="Colorlib Template"/>
                                    </td>
                                    <td class="align-middle text-center">100</td>
                                    <td class="align-middle">
                                        <div class="table-data-feature">
                                            <button class="item" data-toggle="tooltip" data-placement="top"
                                                    title="Chỉnh sửa thông tin danh mục">
                                                <i class="zmdi zmdi-edit"></i>
                                            </button>
                                            <button class="item" data-toggle="tooltip" data-placement="top"
                                                    title="Xóa danh mục">
                                                <i class="zmdi zmdi-delete"></i>
                                            </button>
                                            <button class="item" data-toggle="tooltip" data-placement="top"
                                                    title="Xem chi tiết danh mục">
                                                <i class="zmdi zmdi-more"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center align-middle">1</td>
                                    <td class="text-center align-middle">Hoa sinh nhật</td>
                                    <td class="text-center align-middle">
                                        <img class="img-120"
                                             src="https://tools.dalathasfarm.com/public/products/1638/1638325734/p4u-(10)wm_800x800.jpg"
                                             alt="Colorlib Template"/>
                                    </td>
                                    <td class="align-middle text-center">100</td>
                                    <td class="align-middle">
                                        <div class="table-data-feature">
                                            <button class="item" data-toggle="tooltip" data-placement="top"
                                                    title="Chỉnh sửa thông tin danh mục">
                                                <i class="zmdi zmdi-edit"></i>
                                            </button>
                                            <button class="item" data-toggle="tooltip" data-placement="top"
                                                    title="Xóa danh mục">
                                                <i class="zmdi zmdi-delete"></i>
                                            </button>
                                            <button class="item" data-toggle="tooltip" data-placement="top"
                                                    title="Xem chi tiết danh mục">
                                                <i class="zmdi zmdi-more"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center align-middle">1</td>
                                    <td class="text-center align-middle">Hoa sinh nhật</td>
                                    <td class="text-center align-middle">
                                        <img class="img-120"
                                             src="https://tools.dalathasfarm.com/public/products/1638/1638325734/p4u-(10)wm_800x800.jpg"
                                             alt="Colorlib Template"/>
                                    </td>
                                    <td class="align-middle text-center">100</td>
                                    <td class="align-middle">
                                        <div class="table-data-feature">
                                            <button class="item" data-toggle="tooltip" data-placement="top"
                                                    title="Chỉnh sửa thông tin danh mục">
                                                <i class="zmdi zmdi-edit"></i>
                                            </button>
                                            <button class="item" data-toggle="tooltip" data-placement="top"
                                                    title="Xóa danh mục">
                                                <i class="zmdi zmdi-delete"></i>
                                            </button>
                                            <button class="item" data-toggle="tooltip" data-placement="top"
                                                    title="Xem chi tiết danh mục">
                                                <i class="zmdi zmdi-more"></i>
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
