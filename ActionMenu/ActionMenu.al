controladdin "ActionMenu"
{
    /*VerticalStretch = true;
    HorizontalStretch = true;*/
    VerticalShrink = true;
    HorizontalShrink = true;

    RequestedHeight = 250;

    MinimumWidth = 150;

    Scripts = 'ControlAddIn/ActionMenu/Script/jquery-1.12.js',
            'ControlAddIn/ActionMenu/Script/ActionMenu.js',
            'ControlAddIn/ActionMenu/Script/materialize.js';

    StyleSheets = 'ControlAddIn/ActionMenu/Stylesheet/materialize.css';

    StartupScript = 'ControlAddIn/ActionMenu/Script/start.js';

    event OnAddInReady();

    event OnItemClicked(ItemValue: Text);
   
    procedure CreateButtons(caller: Text);

}

/* user control example

   usercontrol(CustomerAlertActions; "ActionMenu")
            {


                trigger OnAddInReady()
                begin
                    CurrPage.CustomerAlertActions.CreateButtons('setup');
                end;

                trigger OnItemClicked(ItemValue: Text)
                begin
                    case ItemValue of
                        'setup':
                            Page.Run(page::"Somepage");
                        'refresh':
                            Somefunction();
                        'filter':
                            Someotherfunction();
                    end;
                end;
            }
            
            
 */