angular.module('carRentalApp')
.controller('PersonelKullaniciDuzenlemeController', function($scope, UserService) {
    $scope.message = "Personel ve Kullanıcı Hesaplarını Düzenleme Sayfası";

    // Kullanıcı düzenleme işlevi
    $scope.editUser = function(userId) {
         UserService.getUser(userId)
             .then(function(response) {
                 $scope.user = response.data;
         })
             .catch(function(error) {
                 console.error("Kullanıcı getirme hatası: ", error);
             });
    };

    // Personel düzenleme işlevi
    $scope.editStaff = function(staffId) {
        
    
         StaffService.getStaff(staffId)
             .then(function(response) {
                 $scope.staff = response.data;
             })
             .catch(function(error) {
                 console.error("Personel getirme hatası: ", error);
             });
    };
})
.controller('PersonelKullaniciSilmeController', function($scope, UserService) {
    $scope.message = "Personel ve Kullanıcı Hesaplarını Silme Sayfası";

    // Kullanıcı silme işlevi
    $scope.deleteUser = function(userId) {
        
         UserService.deleteUser(userId)
             .then(function(response) {
                 
             })
             .catch(function(error) {
                 console.error("Kullanıcı silme hatası: ", error);
             });
    };

   
    $scope.deleteStaff = function(staffId) {
       
         StaffService.deleteStaff(staffId)
             .then(function(response) {
                
             })
             .catch(function(error) {
                 console.error("Personel silme hatası: ", error);
             });
    };
})
.controller('AracEklemeController', function($scope, VehicleService) {
    $scope.message = "Araç Ekleme Sayfası";

    // Yeni araç ekleme işlevi
    $scope.addVehicle = function(vehicleData) {
        
         VehicleService.addVehicle(vehicleData)
             .then(function(response) {
                 
             })
             .catch(function(error) {
                 console.error("Araç ekleme hatası: ", error);
             });
    };
})
.controller('AracGuncellemeController', function($scope, VehicleService) {
    $scope.message = "Araç Güncelleme Sayfası";

    // Araç güncelleme işlevi
    $scope.updateVehicle = function(vehicleId, updatedData) {
        
         VehicleService.updateVehicle(vehicleId, updatedData)
             .then(function(response) {
                
             })
             .catch(function(error) {
                 console.error("Araç güncelleme hatası: ", error);
             });
    };
})
.controller('RezervasyonYonetimiController', function($scope, ReservationService) {
    $scope.message = "Rezervasyon Yönetimi Sayfası";

    // Rezervasyonları yönetme işlevi
    $scope.manageReservations = function() {
       
         ReservationService.getAllReservations()
             .then(function(response) {
                 $scope.reservations = response.data;
             })
             .catch(function(error) {
                 console.error("Rezervasyonları getirme hatası: ", error);
             });
    };
})
.controller('FiyatlandirmaController', function($scope, PricingService) {
    $scope.message = "Fiyatlandırma Sayfası";

    // Fiyatlandırma işlemleri
    $scope.managePrices = function() {
       
         PricingService.getAllPrices()
             .then(function(response) {
                 $scope.prices = response.data;
             })
             .catch(function(error) {
                 console.error("Fiyatları getirme hatası: ", error);
             });
    };
})
.controller('KampanyaYonetimiController', function($scope, CampaignService) {
    $scope.message = "Kampanya Yönetimi Sayfası";

    // Kampanya yönetimi işlemleri
    $scope.manageCampaigns = function() {
       
         CampaignService.getAllCampaigns()
             .then(function(response) {
                 $scope.campaigns = response.data;
             })
             .catch(function(error) {
                 console.error("Kampanyaları getirme hatası: ", error);
             });
    };
});
