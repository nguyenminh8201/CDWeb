import React, { Component } from 'react'
import Header from './HeaderAd'
import MenuSidebar from './MenuSidebar'

export default class OrderManagerment extends Component {
  render() {
    return (
        <div class="page-wrapper">
            <MenuSidebar/>
        <div class="page-container">
            <Header/>
            {/* <!-- MAIN CONTENT--> */}
    
            {/* <!-- DATA TABLE--> */}
            <section class="p-t-20">
            <div class="container main-content">
                <div class="row">
                    <div class="col-md-12">
                        <div class="table-data__tool">
                            <div class="table-data__tool-left">
                                <span class=" title-2">Danh sách đơn hàng</span>

                            </div>
                            <div class="table-data__tool-right">
                                <button class="au-btn au-btn-icon au-btn--green au-btn--small" data-toggle="modal"
                                        data-target="#checkOrder">
                                    <i class="zmdi zmdi-check"></i>Duyệt đơn
                                </button>
                                <div class="rs-select2--dark rs-select2--sm rs-select2--dark2">
                                    <select class="js-select2" name="type">
                                        <option selected="selected">Xuất file</option>
                                        <option value="">Excel</option>
                                        <option value="">Pdf</option>
                                    </select>
                                    <div class="dropDownSelect2"></div>
                                </div>
                            </div>

                        </div>
                        <div class="table-responsive table-responsive-data2">
                            <table class="table table-data2">
                                <thead>
                                <tr>
                                    <th>
                                        <label class="au-checkbox">
                                            <input type="checkbox"/>
                                            <span class="au-checkmark"></span>
                                        </label>
                                    </th>
                                    <th>ID Đơn hàng</th>
                                    <th>Ngày tạo đơn</th>
                                    <th>Trạng thái</th>
                                    <th>Tổng thu</th>
                                    <th>Khách hàng</th>
                                    <th>Sản phẩm</th>
                                    <th>Thông tin giao hàng</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="tr-shadow">
                                    <td>
                                        <label class="au-checkbox">
                                            <input type="checkbox"/>
                                            <span class="au-checkmark"></span>
                                        </label>
                                    </td>
                                    <td class="align-middle">1</td>
                                    <td class="align-middle">2018-09-27 02:12</td>
                                    <td>
                                        <span class="status--denied">Chờ xử lý</span>
                                    </td>
                                    <td>625.00đ</td>
                                    <td>
                                        <button className="item" data-toggle="tooltip" data-placement="top"
                                                title="Xem Chi tiết khách hàng">
                                            <span data-toggle="modal" data-target="#detailCustomerModal"
                                                  style={{ textDecoration: "underline" }}>Chi tiết</span>
                                        </button>
                                    </td>
                                    <td>
                                        <button className="item" data-toggle="tooltip" data-placement="top"
                                                title="Xem chi tiết sản phẩm khách đặt">
                                            <span data-toggle="modal" data-target="#productOrderModal"
                                                  style={{ textDecoration: "underline" }}>Chi tiết</span>
                                        </button>
                                    </td>
                                    <td>
                                        <button className="item" data-toggle="tooltip" data-placement="top"
                                                title="Xem chi tiết thông tin giao hàng">
                                            <span data-toggle="modal" data-target="#deliveryInfoModal"
                                                  style={{ textDecoration: "underline" }}>Chi tiết</span>
                                        </button>
                                    </td>

                                    <td>
                                        <div class="table-data-feature">

                                            <button className="item" data-toggle="modal" data-target="#deleteOrderModal"
                                                    data-placement="top"
                                                    title="Xóa đơn hàng">
                                                <i class="zmdi zmdi-delete"></i>
                                            </button>

                                        </div>
                                    </td>
                                </tr>
                                <tr class="spacer"></tr>
                                <tr class="tr-shadow">
                                    <td>
                                        <label class="au-checkbox">
                                            <input type="checkbox"/>
                                            <span class="au-checkmark"></span>
                                        </label>
                                    </td>
                                    <td class="align-middle">1</td>
                                    <td class="align-middle">2018-09-27 02:12</td>
                                    <td>
                                        <span class="status--denied">Chờ xử lý</span>
                                    </td>
                                    <td>625.00đ</td>
                                    <td>
                                        <button className="item" data-toggle="tooltip" data-placement="top"
                                                title="Xem Chi tiết khách hàng">
                                            <span data-toggle="modal" data-target="#detailCustomerModal"
                                                 style={{ textDecoration: "underline" }}>Chi tiết</span>
                                        </button>
                                    </td>
                                    <td>
                                        <button className="item" data-toggle="tooltip" data-placement="top"
                                                title="Xem chi tiết sản phẩm khách đặt">
                                            <span data-toggle="modal" data-target="#productOrderModal"
                                                  style={{ textDecoration: "underline" }}>Chi tiết</span>
                                        </button>
                                    </td>
                                    <td>
                                        <button className="item" data-toggle="tooltip" data-placement="top"
                                                title="Xem chi tiết thông tin giao hàng">
                                            <span data-toggle="modal" data-target="#deliveryInfoModal"
                                                  style={{ textDecoration: "underline" }}>Chi tiết</span>
                                        </button>
                                    </td>

                                    <td>
                                        <div class="table-data-feature">

                                            <button class="item" data-toggle="modal" data-target="#deleteOrderModal"
                                                    data-placement="top"
                                                    title="Xóa đơn hàng">
                                                <i class="zmdi zmdi-delete"></i>
                                            </button>

                                        </div>
                                    </td>
                                </tr>
                                <tr class="spacer"></tr>
                                <tr class="tr-shadow">
                                    <td>
                                        <label class="au-checkbox">
                                            <input type="checkbox"/>
                                            <span class="au-checkmark"></span>
                                        </label>
                                    </td>
                                    <td class="align-middle">1</td>
                                    <td class="align-middle">2018-09-27 02:12</td>
                                    <td>
                                        <span class="status--denied">Chờ xử lý</span>
                                    </td>
                                    <td>625.00đ</td>
                                    <td>
                                        <button class="item" data-toggle="tooltip" data-placement="top"
                                                title="Xem Chi tiết khách hàng">
                                            <span data-toggle="modal" data-target="#detailCustomerModal"
                                                  style={{ textDecoration: "underline" }}>Chi tiết</span>
                                        </button>
                                    </td>
                                    <td>
                                        <button class="item" data-toggle="tooltip" data-placement="top"
                                                title="Xem chi tiết sản phẩm khách đặt">
                                            <span data-toggle="modal" data-target="#productOrderModal"
                                                  sstyle={{ textDecoration: "underline" }}>Chi tiết</span>
                                        </button>
                                    </td>
                                    <td>
                                        <button className="item" data-toggle="tooltip" data-placement="top"
                                                title="Xem chi tiết thông tin giao hàng">
                                            <span data-toggle="modal" data-target="#deliveryInfoModal"
                                                  style={{ textDecoration: "underline" }}>Chi tiết</span>
                                        </button>
                                    </td>

                                    <td>
                                        <div className="table-data-feature">

                                            <button className="item" data-toggle="modal" data-target="#deleteOrderModal"
                                                    data-placement="top"
                                                    title="Xóa đơn hàng">
                                                <i class="zmdi zmdi-delete"></i>
                                            </button>

                                        </div>
                                    </td>
                                </tr>
                                <tr class="spacer"></tr>

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
        
    )
  }
}
