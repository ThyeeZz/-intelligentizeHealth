import Login from '@/pages/login'
import Index from '@/pages/index'

const routes = [{
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/pages/signup')
  },
  {
    path: '/index',
    name: "index",
    component: Index,
    redirect: "/index/synthesize",
    children: [{
        path: '/index/synthesize',
        name: 'synthesize',
        component: resolve => require(['@/pages/synthesize'], resolve)
      },
      {
        path: '/index/bandsport',
        name: 'bandSport',
        component: resolve => require(['@/pages/bandSport'], resolve)
      },
      {
        path: '/index/looklocus',
        name: 'lookLocus',
        component: resolve => require(['@/pages/lookLocus'], resolve)
      },
      {
        path: '/index/emergencycall',
        name: 'emergencyCall',
        component: () => import('@/pages/emergencyCall')
      },
      {
        path: '/index/carePlan',
        name: 'carePlan',
        component: () => import('@/pages/carePlan')
      },
      {
        path: '/index/earlyWarning',
        name: 'earlyWarning',
        component: () => import('@/pages/earlyWarning')
      },
      {
        path: '/index/realtimeActivity',
        name: 'realtimeActivity',
        component: () => import('@/pages/realtimeActivity')
      },
      {
        path: '/index/sleepRest',
        name: 'sleepRest',
        component: () => import('@/pages/sleepRest')
      },
      {
        path: '/index/system',
        name: 'system',
        component: () => import('@/pages/system'),
        redirect: '/index/system/patient/search',
        children: [
          // 病人管理--------------------------------------------------
          {
            path: '/index/system/patient/search',
            name: 'patientSearch',
            meta: {
              title: "病人信息查看"
            },
            component: () => import('@/pages/systemPages/patientMng/PatientSearch')
          },
          {
            path: '/index/system/patient/upload',
            name: 'patientUpload',
            meta: {
              title: "病人信息上传"
            },
            component: () => import('@/pages/systemPages/patientMng/PatientUpload')
          },
          {
            path: '/index/system/patient/edit',
            name: 'editPatient',
            meta: {
              title: "病人信息修改"
            },
            component: () => import('@/pages/systemPages/patientMng/EditPatient')
          },
          {
            path: '/index/system/admin/create',
            name: 'createAdmin',
            meta: {
              title: "创建用户"
            },
            component: () => import('@/pages/systemPages/patientMng/CreateAdmin')
          },

          // 医生管理 ------------------------------------------------------
          {
            path: '/index/system/doctor/search',
            name: 'doctorSearch',
            meta: {
              title: "医生信息查看"
            },
            component: () => import('@/pages/systemPages/doctorMng/DoctorSearch')
          },
          {
            path: '/index/system/doctor/upload',
            name: 'doctorUpload',
            meta: {
              title: "医生信息上传"
            },
            component: () => import('@/pages/systemPages/doctorMng/DoctorUpload')
          },
          {
            path: '/index/system/doctor/edit',
            name: 'editDoctor',
            meta: {
              title: "医生信息修改"
            },
            component: () => import('@/pages/systemPages/doctorMng/EditDoctor')
          },
          {
            path: '/index/system/gatewayRestart',
            name: 'gatewayRestart',
            meta: {
              title: "网关重启"
            },
            component: () => import('@/pages/systemPages/GatewayRestart')
          },

          // 网关管理 -------------------------------------------------------------
          {
            path: '/index/system/beacon/search',
            name: 'beaconSearch',
            meta: {
              title: "网关查询"
            },
            component: () => import('@/pages/systemPages/beaconConf/BeaconSearch')
          },{
            path: '/index/system/beacon/update',
            name: 'beaconUpdate',
            meta: {
              title: "网关更新"
            },
            component: () => import('@/pages/systemPages/beaconConf/BeaconUpdate')
          },

          // 体征报警管理 --------------------------------------------------
          {
            path: '/index/system/alarm/search',
            name: 'alarmSearch',
            meta: {
              title: "体征报警查询"
            },
            component: () => import('@/pages/systemPages/heatAlarm/HeatAlarmSearch')
          }
        ]
      }
    ]
  }
]

export default routes
