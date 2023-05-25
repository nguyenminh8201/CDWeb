import React, { Component } from 'react'
import HeaderAd from './HeaderAd'
import MenuSidebar from './MenuSidebar'

export default class Statistical extends Component {
  render() {
    return (
    <div>
        <div class="page-wrapper">
            <MenuSidebar/>
            <div class="page-container">
            <HeaderAd/>
                <div class="main-content">
            <div class="section__content section__content--p30">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="overview-wrap">
                                <h2 class="title-1">Tổng quan</h2>
                                <button class="au-btn au-btn-icon au-btn--blue" style={{width : "250px"}}>
                                    <i class="zmdi zmdi-plus"></i>Thêm đơn hàng
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="row m-t-25">
                        <div class="col-sm-6 col-lg-3">
                            <div class="overview-item overview-item--c1">
                                <div class="overview__inner">
                                    <div class="overview-box clearfix">
                                        <div class="icon">
                                            <i class="zmdi zmdi-account-o"></i>
                                        </div>
                                        <div class="text">
                                            <h2>10368</h2>
                                            <span>Số lượng truy cập</span>
                                        </div>
                                    </div>
                                    <div class="overview-chart">
                                        <canvas id="widgetChart1"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <div class="overview-item overview-item--c2">
                                <div class="overview__inner">
                                    <div class="overview-box clearfix">
                                        <div class="icon">
                                            <i class="zmdi zmdi-shopping-cart"></i>
                                        </div>
                                        <div class="text">
                                            <h2>388,688</h2>
                                            <span>Sản phẩm đã bán</span>
                                        </div>
                                    </div>
                                    <div class="overview-chart">
                                        <canvas id="widgetChart2"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <div class="overview-item overview-item--c3">
                                <div class="overview__inner">
                                    <div class="overview-box clearfix">
                                        <div class="icon">
                                            <i class="zmdi zmdi-calendar-note"></i>
                                        </div>
                                        <div class="text">
                                            <h2>1,086</h2>
                                            <span>Số lượng đơn hàng</span>
                                        </div>
                                    </div>
                                    <div class="overview-chart">
                                        <canvas id="widgetChart3"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <div class="overview-item overview-item--c4">
                                <div class="overview__inner">
                                    <div class="overview-box clearfix">
                                        <div class="icon">
                                            <i class="zmdi zmdi-money"></i>
                                        </div>
                                        <div class="text">
                                            <h2>$1,060,386</h2>
                                            <span>Tổng doanh thu</span>
                                        </div>
                                    </div>
                                    <div class="overview-chart">
                                        <canvas id="widgetChart4"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="au-card recent-report">
                                <div class="au-card-inner">
                                    <h3 class="title-2">recent reports</h3>
                                    <div class="chart-info">
                                        <div class="chart-info__left">
                                            <div class="chart-note">
                                                <span class="dot dot--blue"></span>
                                                <span>products</span>
                                            </div>
                                            <div class="chart-note mr-0">
                                                <span class="dot dot--green"></span>
                                                <span>services</span>
                                            </div>
                                        </div>
                                        <div class="chart-info__right">
                                            <div class="chart-statis">
                                                    <span class="index incre">
                                                        <i class="zmdi zmdi-long-arrow-up"></i>25%</span>
                                                <span class="label">products</span>
                                            </div>
                                            <div class="chart-statis mr-0">
                                                    <span class="index decre">
                                                        <i class="zmdi zmdi-long-arrow-down"></i>10%</span>
                                                <span class="label">services</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="recent-report__chart">
                                        <canvas id="recent-rep-chart"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="au-card chart-percent-card">
                                <div class="au-card-inner">
                                    <h3 class="title-2 tm-b-5">char by %</h3>
                                    <div class="row no-gutters">
                                        <div class="col-xl-6">
                                            <div class="chart-note-wrap">
                                                <div class="chart-note mr-0 d-block">
                                                    <span class="dot dot--blue"></span>
                                                    <span>products</span>
                                                </div>
                                                <div class="chart-note mr-0 d-block">
                                                    <span class="dot dot--red"></span>
                                                    <span>services</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-6">
                                            <div class="percent-chart">
                                                <canvas id="percent-chart"></canvas>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <h2 class="title-1 m-b-25">Thu nhập theo mặt hàng</h2>

                                <div class="table-responsive m-b-40">
                                    <table class="table table-borderless table-data3">
                                <thead >
                                <tr>
                                    <th class="text-center text-white">STT</th>
                                    <th class="text-center text-white">Tên sản phẩm</th>
                                    <th class="text-center text-white">Ảnh sản phẩm</th>
                                    <th class="text-center text-white">Số lượng</th>
                                    <th class="text-center text-white">Doanh thu</th>
                                    <th class="text-center text-white">Giảm giá</th>
                                    <th class="text-center text-white">Doanh thu thực</th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td class="text-center align-middle">1</td>
                                    <td class="text-center align-middle">HOA VIOLET CHÂU PHI</td>
                                    <td class="text-center align-middle">
                                        <img class="img-120"
                                                src="https://tools.dalathasfarm.com/public/products/1638/1638325734/p4u-(10)wm_800x800.jpg"
                                                alt="Colorlib Template"/>
                                    </td>
                                    <td class="align-middle text-center">3</td>
                                    <td class="align-middle text-center">600.000đ</td>
                                    <td class="align-middle text-center">100.000đ</td>
                                    <td class="align-middle text-center">500.000đ</td>
                                </tr>
                                <tr>
                                    <td class="text-center align-middle">2</td>
                                    <td class="text-center align-middle">HOA GIÁNG SINH ĐỎ</td>
                                    <td class="text-center align-middle">
                                        <img class="img-120"
                                             src="https://tools.dalathasfarm.com/public/products/1638/1638325734/p4u-(10)wm_800x800.jpg"
                                             alt="Colorlib Template"/>
                                    </td>
                                    <td class="align-middle text-center">3</td>
                                    <td class="align-middle text-center">600.000đ</td>
                                    <td class="align-middle text-center">100.000đ</td>
                                    <td class="align-middle text-center">500.000đ</td>
                                </tr>
                                <tr>
                                    <td class="text-center align-middle">1</td>
                                    <td class="text-center align-middle">HOA VIOLET CHÂU PHI</td>
                                    <td class="text-center align-middle">
                                        <img class="img-120"
                                             src="https://tools.dalathasfarm.com/public/products/1638/1638325734/p4u-(10)wm_800x800.jpg"
                                             alt="Colorlib Template"/>
                                    </td>
                                    <td class="align-middle text-center">3</td>
                                    <td class="align-middle text-center">600.000đ</td>
                                    <td class="align-middle text-center">100.000đ</td>
                                    <td class="align-middle text-center">500.000đ</td>
                                </tr>
                                <tr>
                                    <td class="text-center align-middle">1</td>
                                    <td class="text-center align-middle">HOA VIOLET CHÂU PHI</td>
                                    <td class="text-center align-middle">
                                        <img class="img-120"
                                             src="https://tools.dalathasfarm.com/public/products/1638/1638325734/p4u-(10)wm_800x800.jpg"
                                             alt="Colorlib Template"/>
                                    </td>
                                    <td class="align-middle text-center">3</td>
                                    <td class="align-middle text-center">600.000đ</td>
                                    <td class="align-middle text-center">100.000đ</td>
                                    <td class="align-middle text-center">500.000đ</td>
                                </tr>
                                <tr>
                                    <td class="text-center align-middle">1</td>
                                    <td class="text-center align-middle">HOA VIOLET CHÂU PHI</td>
                                    <td class="text-center align-middle">
                                        <img class="img-120"
                                             src="https://tools.dalathasfarm.com/public/products/1638/1638325734/p4u-(10)wm_800x800.jpg"
                                             alt="Colorlib Template"/>
                                    </td>
                                    <td class="align-middle text-center">3</td>
                                    <td class="align-middle text-center">600.000đ</td>
                                    <td class="align-middle text-center">100.000đ</td>
                                    <td class="align-middle text-center">500.000đ</td>
                                </tr>
                                <tr>
                                    <td class="text-center align-middle">1</td>
                                    <td class="text-center align-middle">HOA VIOLET CHÂU PHI</td>
                                    <td class="text-center align-middle">
                                        <img class="img-120"
                                             src="https://tools.dalathasfarm.com/public/products/1638/1638325734/p4u-(10)wm_800x800.jpg"
                                             alt="Colorlib Template"/>
                                    </td>
                                    <td class="align-middle text-center">3</td>
                                    <td class="align-middle text-center">600.000đ</td>
                                    <td class="align-middle text-center">100.000đ</td>
                                    <td class="align-middle text-center">500.000đ</td>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="copyright">
                                <p>Tự hào Flower Shop - luôn tận tâm vì khách hàng. Trang chính <a
                                        href="https://colorlib.com">FlowerShop</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>
        </div>
    </div>
        
      
    )
  }
}
