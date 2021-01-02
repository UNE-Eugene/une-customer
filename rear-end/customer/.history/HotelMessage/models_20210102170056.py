# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class THotelInfo(models.Model):
    hotel_id = models.CharField(max_length=7, blank=True, null=True)
    hotel_name = models.CharField(max_length=255, blank=True, null=True)
    platform = models.CharField(max_length=255, blank=True, null=True)
    city = models.CharField(max_length=255, blank=True, null=True)
    telephone = models.CharField(max_length=20, blank=True, null=True)
    data_url = models.TextField(blank=True, null=True)
    near_url = models.TextField(blank=True, null=True)
    cdn_url = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'T_Hotel_Info'

class THotelAddress(models.Model):
    hotel_id = models.ForeignKey('THotelInfo')
    longtitude = models.FloatField(blank=True, null=True)
    latitude = models.FloatField(blank=True, null=True)
    address = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'T_Hotel_Address'


class THotelGroupBrief(models.Model):
    group_id = models.CharField(max_length=255, blank=True, null=True)
    group_name_cn = models.CharField(db_column='group_name_CN', max_length=255, blank=True, null=True)  # Field name made lowercase.
    group_brief = models.TextField(blank=True, null=True)
    group_name_uk = models.CharField(db_column='group_name_UK', max_length=255, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'T_Hotel_Group_Brief'


class THotelHotelDistance(models.Model):
    hotel_id_from = models.CharField(max_length=7, blank=True, null=True)
    hotel_id_to = models.CharField(max_length=7, blank=True, null=True)
    distance = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'T_Hotel_Hotel_Distance'





class THotelRoomMapping(models.Model):
    room_id = models.CharField(max_length=7, blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    third_name = models.CharField(max_length=255, blank=True, null=True)
    introduction = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'T_Hotel_Room_Mapping'


class THotelSort(models.Model):
    hotel_id = models.CharField(max_length=255, blank=True, null=True)
    multiple_level_name = models.CharField(max_length=255, blank=True, null=True)
    multiple_level = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'T_Hotel_Sort'


class THotelSortPriceLevel(models.Model):
    hotel_id = models.CharField(max_length=255, blank=True, null=True)
    promote_level = models.CharField(max_length=255, blank=True, null=True)
    price_level = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'T_Hotel_Sort_Price_Level'


class THotelSortPromoteLevel(models.Model):
    hotel_id = models.CharField(max_length=255, blank=True, null=True)
    promote_level = models.CharField(max_length=255, blank=True, null=True)
    price_level = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'T_Hotel_Sort_Promote_Level'


class THotelStaticReferer(models.Model):
    hotel_id = models.CharField(max_length=255, blank=True, null=True)
    static_referer = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'T_Hotel_Static_Referer'


class THotelSuggest(models.Model):
    hotel_id = models.CharField(max_length=7, blank=True, null=True)
    suggest_1 = models.CharField(max_length=255, blank=True, null=True)
    suggest_2 = models.CharField(max_length=255, blank=True, null=True)
    suggest_3 = models.CharField(max_length=255, blank=True, null=True)
    suggest_4 = models.CharField(max_length=255, blank=True, null=True)
    suggest_5 = models.CharField(max_length=255, blank=True, null=True)
    suggest_6 = models.CharField(max_length=255, blank=True, null=True)
    suggest_7 = models.CharField(max_length=255, blank=True, null=True)
    suggest_8 = models.CharField(max_length=255, blank=True, null=True)
    suggest_9 = models.CharField(max_length=255, blank=True, null=True)
    suggest_10 = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'T_Hotel_Suggest'


class THotelTag(models.Model):
    tags = models.TextField(blank=True, null=True)
    hotel_id = models.CharField(max_length=7, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'T_Hotel_Tag'


class THotelTrade(models.Model):
    id = models.IntegerField(primary_key=True)
    trade_id = models.CharField(max_length=255, blank=True, null=True)
    city = models.CharField(max_length=255, blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    longtitude = models.FloatField(blank=True, null=True)
    latitude = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'T_Hotel_Trade'


class THotelTradeDistance(models.Model):
    hotel_id = models.CharField(max_length=7, blank=True, null=True)
    trade_id = models.CharField(max_length=255, blank=True, null=True)
    distance = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'T_Hotel_Trade_Distance'


class TRemindConfig(models.Model):
    une_id = models.IntegerField(blank=True, null=True)
    start_date = models.CharField(max_length=255, blank=True, null=True)
    hotel_name = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'T_Remind_Config'


class TUserMessage(models.Model):
    user = models.CharField(max_length=255, blank=True, null=True)
    password = models.CharField(max_length=255, blank=True, null=True)
    hash = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'T_User_Message'


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)

     
class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class THotel(models.Model):
    une_id = models.IntegerField(primary_key=True)
    hotel_name = models.CharField(max_length=255, blank=True, null=True)
    hotel_brief = models.TextField(blank=True, null=True)
    hotel_tel = models.CharField(max_length=255, blank=True, null=True)
    hotel_city = models.CharField(max_length=255, blank=True, null=True)
    hotel_type = models.CharField(max_length=255, blank=True, null=True)
    hotel_sround = models.CharField(max_length=255, blank=True, null=True)
    hotel_promote = models.CharField(max_length=255, blank=True, null=True)
    hotel_hote = models.CharField(max_length=255, blank=True, null=True)
    hotel_group = models.CharField(max_length=255, blank=True, null=True)
    advantage = models.TextField(blank=True, null=True)
    disadvantage = models.TextField(blank=True, null=True)
    website = models.TextField(blank=True, null=True)
    id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 't_hotel'
